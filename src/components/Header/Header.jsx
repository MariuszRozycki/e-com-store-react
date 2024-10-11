import { Link } from "react-router-dom";
import { ContainerHeader } from "../../components";
import { HamburgerMenu, Nav } from "../../components";
import * as S from "../Header/Header.styled";

const Header = () => {
  return (
    <S.Header>
      <ContainerHeader>
        <Link to='/'>eCom</Link>
        <HamburgerMenu />
        <Nav />
      </ContainerHeader>
    </S.Header>
  );
};

export default Header;
