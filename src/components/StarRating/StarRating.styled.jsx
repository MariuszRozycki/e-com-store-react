import styled from "styled-components";

export const StarRating = styled.div.attrs({ className: "star-rating" })`
  .fa-star,
  .fa-star-half-stroke {
    font-size: 22px;
  }

  .full-star,
  .half-star {
    color: gold;
  }

  .empty-star {
    color: gold;
  }
`;
