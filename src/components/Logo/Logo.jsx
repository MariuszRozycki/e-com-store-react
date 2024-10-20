import * as S from "./Logo.styled";

const Logo = () => {
  return (
    <S.Logo>
      <div className='img-wrapper'>
        <img src='/pictures/logo/logo.png' alt='Logo' />
      </div>
      <p className='logo-text'>eCom</p>
    </S.Logo>
  );
};

export default Logo;
