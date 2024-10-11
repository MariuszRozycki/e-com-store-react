import { NavLink } from "react-router-dom";
import * as S from "../Nav/Nav.styled";

const Nav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <S.Nav isMenuOpen={isMenuOpen} onClick={() => toggleMenu()}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </S.Nav>
  );
};

export default Nav;
