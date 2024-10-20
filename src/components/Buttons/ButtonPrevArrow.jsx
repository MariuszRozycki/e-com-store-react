import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ButtonPrevArrow.styled";
import { Link } from "react-router-dom";

export const ButtonPrevArrow = () => {
  return (
    <Link to='/'>
      <S.ButtonPrevArrow>
        <FontAwesomeIcon icon={faAnglesLeft} /> Preview
      </S.ButtonPrevArrow>
    </Link>
  );
};
