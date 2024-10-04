import { Link } from "react-router-dom";
import { ContainerHeader } from "../../components";
import Nav from "../Nav/Nav";
import * as S from "../Header/Header.styled";

const Header = () => {
  return (
    <S.Header>
      <ContainerHeader>
        <Link to='/'>eCom</Link>
        <Nav />
      </ContainerHeader>
    </S.Header>
  );
};

export default Header;
