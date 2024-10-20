import * as S from "./HamburgerMenu.styled";

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <S.HamburgerMenu isMenuOpen={isMenuOpen} onClick={() => toggleMenu()}>
      <span id='bar-one' className='bars bar-one'></span>
      <span id='bar-two' className='bars bar-two'></span>
      <span id='bar-three' className='bars bar-three'></span>
    </S.HamburgerMenu>
  );
};

export default HamburgerMenu;
