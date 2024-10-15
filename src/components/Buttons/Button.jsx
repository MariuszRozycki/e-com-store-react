import * as S from "./ButtonBase.styles";

export const Button = ({ buttonText, onClick, className }) => {
  return (
    <S.ButtonBase className={className} onClick={onClick}>
      {buttonText}
    </S.ButtonBase>
  );
};
