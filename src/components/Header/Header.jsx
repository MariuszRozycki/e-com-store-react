import { Link } from "react-router-dom";
import { ContainerHeader, HamburgerMenu, Nav, ShoppingCartIcon, Logo } from "../../components";
import useMobileNav from "../../hooks/useMobileNav";
import * as S from "../Header/Header.styled";

const Header = ({ headerRef }) => {
  const { toggleMenu, isMenuOpen, handleLinkClick } = useMobileNav();

  return (
    <S.Header ref={headerRef}>
      <ContainerHeader>
        <Link onClick={handleLinkClick} to='/'>
          <Logo />
        </Link>
        <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <ShoppingCartIcon handleLinkClick={handleLinkClick} />
      </ContainerHeader>
    </S.Header>
  );
};

export default Header;
