import * as S from "./ButtonBase.styles";

export const Button = ({ buttonText, onClick }) => {
  return <S.ButtonBase onClick={onClick}>{buttonText}</S.ButtonBase>;
};
