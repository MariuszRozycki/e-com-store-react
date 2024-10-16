import * as S from "./HamburgerMenu.styled";

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <S.HamburgerMenu onClick={() => toggleMenu()}>
      <span id='bar-one' className='bars'></span>
      <span id='bar-two' className='bars'></span>
      <span id='bar-three' className='bars'></span>
    </S.HamburgerMenu>
  );
};

export default HamburgerMenu;
