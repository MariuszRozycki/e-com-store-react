import { Link } from "react-router-dom";
import { ContainerHeader } from "../../components";
import useMobileNav from "../../hooks/useMobileNav";
import { HamburgerMenu, Nav } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import * as S from "../Header/Header.styled";

const Header = () => {
  const { toggleMenu, isMenuOpen, handleLinkClick } = useMobileNav();

  return (
    <S.Header>
      <ContainerHeader>
        <Link onClick={handleLinkClick} to='/'>
          eCom
        </Link>
        <HamburgerMenu toggleMenu={toggleMenu} />
        <Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <FontAwesomeIcon icon={faCartShopping} />
      </ContainerHeader>
    </S.Header>
  );
};

export default Header;
