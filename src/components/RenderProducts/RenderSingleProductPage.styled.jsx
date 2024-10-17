import styled from "styled-components";

export const RenderSingleProductPage = styled.div`
  width: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-columns: 1fr;

  .single-product-img-wrap {
    height: 220px;
    max-width: 295px;
    border-radius: ${({ theme }) => theme.radius.singleProduct};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-description-header {
    grid-row: 3/4;
  }

  .product-description-header {
    margin-bottom: 0;
  }

  .product-old-price-number span {
    text-decoration: line-through;
  }

  .product-discounted-price span,
  .product-regular-price p {
    font-size: 20px;
    font-weight: 600;
  }

  .product-discounted-price span {
    color: ${({ theme }) => theme.color.discount};
  }

  .discount-percentage,
  .product-old-price-number {
    margin-bottom: 0;
  }

  .product-discounted-price,
  .discount-in-currency {
    margin-top: 3px;
  }

  .product-description {
    margin-top: 5px;
  }

  .product-reviews ul {
    list-style: disc;
    padding: ${({ theme }) => theme.padding.container};
  }

  button {
    margin-top: 20px;
    justify-self: flex-start;
    color: var(--color-black);
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: minmax(auto, 295px) 60%;
    grid-column-gap: 10px;

    .product-title {
      grid-row: 1/2;
      grid-column: 2/3;
      margin-top: 0;
      justify-self: flex-start;
    }

    .product-regular-price,
    .product-discount {
      margin-top: 50px;
      grid-row: 1/2;
      grid-column: 2/3;
    }

    .product-description-header,
    .product-description {
      grid-row: 2/3;
      grid-column: 1/3;
    }

    .product-description {
      margin-top: 50px;
    }

    .product-reviews {
      grid-row: 3/4;
      grid-column: 1/3;
    }

    .product-rating {
      grid-column: 1/2;
      grid-row: 4/5;
    }

    button {
      grid-column: 1/3;
      grid-row: 5/6;
      justify-self: flex-start;
    }
  }
`;
