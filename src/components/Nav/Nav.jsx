import { NavLink } from "react-router-dom";
import * as S from "../Nav/Nav.styled";

const Nav = () => {
  return (
    <S.Nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </S.Nav>
  );
};

export default Nav;
