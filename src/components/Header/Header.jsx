import { Link } from "react-router-dom";
import { ContainerHeader } from "../../components";
import useMobileNav from "../../hooks/useMobileNav";
import { HamburgerMenu, Nav } from "../../components";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import * as S from "../Header/Header.styled";

const Header = ({ headerRef }) => {
  const { toggleMenu, isMenuOpen, handleLinkClick } = useMobileNav();

  return (
    <S.Header ref={headerRef}>
      <ContainerHeader>
        <Link onClick={handleLinkClick} to='/'>
          eCom
        </Link>
        <HamburgerMenu toggleMenu={toggleMenu} />
        <Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <ShoppingCartIcon handleLinkClick={handleLinkClick} />
      </ContainerHeader>
    </S.Header>
  );
};

export default Header;
