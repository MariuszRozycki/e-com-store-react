import * as S from "./ButtonBase.styled";

export const Button = ({ buttonText, onClick, className }) => {
  return (
    <S.ButtonBase className={className} onClick={onClick}>
      {buttonText}
    </S.ButtonBase>
  );
};
