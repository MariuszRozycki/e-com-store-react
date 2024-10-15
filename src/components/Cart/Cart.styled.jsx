import styled from "styled-components";

export const Cart = styled.div.attrs({ className: "cart" })`
  display: grid;
  gap: 10px;
  width: 100%;

  .cart-product {
    padding: ${({ theme }) => theme.padding.container};
    display: grid;
    gap: 5px;
    grid-template-columns: 70px auto auto auto;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-white);
  }

  .img-wrapper {
    width: 70px;
    height: 70px;
    grid-column: 1/2;

    img {
      border-radius: ${({ theme }) => theme.radius.singleProduct};
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  h2 {
    font-size: 14px;
    grid-row: 1/2;
    grid-column: 2/3;
    margin-left: 10px;
    padding: 0;
    margin: 0;
  }

  .product-quantity {
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .fa-trash {
    grid-column: 3/4;
    grid-row: 1/2;
    font-size: 24px;
  }
`;
