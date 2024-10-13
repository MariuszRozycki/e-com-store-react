import * as S from "./StarRating.styled";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon icon={faStar} className='full-star' key={i} />);
      } else if (i - rating < 1) {
        stars.push(<FontAwesomeIcon icon={faStarHalfAlt} className='half-star' key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={faEmptyStar} className='empty-star' key={i} />);
      }
    }
    return stars;
  };

  return <S.StarRating>{renderStars()}</S.StarRating>;
};
