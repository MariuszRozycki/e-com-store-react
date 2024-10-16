import styled from "styled-components";

export const Cart = styled.div.attrs({ className: "cart" })`
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  width: 100%;

  .total-number-of-products {
    span {
      font-weight: 600;
    }
  }

  .cart-product {
    box-sizing: border-box;
    width: 100%;
    padding: ${({ theme }) => theme.padding.container};
    display: grid;
    gap: 5px;
    grid-template-columns: 70px 1fr 1fr 1fr;
    grid-template-rows: 1fr 70px;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--color-white);
    border-radius: ${({ theme }) => theme.radius.singleProduct};
    box-shadow: ${({ theme }) => theme.boxShadows.light};
  }

  .img-wrapper {
    cursor: pointer;
    width: 70px;
    height: 70px;
    grid-column: 1/2;

    &:hover + h2 {
      text-decoration: underline;
    }

    img {
      border-radius: ${({ theme }) => theme.radius.singleProduct};
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  h2 {
    box-sizing: border-box;
    font-size: 16px;
    grid-row: 1/2;
    grid-column: 2/4;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.standard};

    &:hover {
      text-decoration: underline;
    }
  }

  .product-quantity {
    width: 110px;
    max-width: 120px;
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    button {
      padding: 10px;
    }

    .fa-minus,
    .fa-plus {
      font-size: 10px;
    }
  }

  .product-price {
    grid-row: 2/2;
    grid-column: 2/5;
    justify-self: flex-end;
  }

  .fa-trash {
    justify-self: flex-end;
    grid-column: 3/5;
    grid-row: 1/2;
    font-size: 24px;
  }

  .total-price {
    border-top: 1px solid;
    margin-top: 20px;
    padding-top: 10px;

    span {
      font-weight: 600;
    }
  }

  .fa-euro-sign {
    font-size: 16px;
  }

  .checkout-btn {
    justify-self: flex-start;
  }

  @media ${({ theme }) => theme.device.tablet} {
    .cart-product {
      row-gap: 5px;
      grid-template-columns: 90px 1fr 1fr 1fr;
      grid-template-rows: 1fr 40px;
    }

    .img-wrapper {
      width: 90px;
      height: 90px;
    }

    h2 {
      grid-column: 2/3;
    }

    .product-price {
      margin: 0;
    }

    .product-quantity {
      grid-column: 3/4;
      grid-row: 1/2;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    .cart-product {
      grid-template-columns: 90px repeat(4, 1fr);
      grid-template-rows: 1fr;
    }

    .product-quantity {
      justify-self: flex-end;
    }

    .product-price {
      grid-row: 1/2;
      grid-column: 2/5;
    }

    .fa-trash {
      grid-column: 5/6;
      justify-self: center;
    }
  }
`;
