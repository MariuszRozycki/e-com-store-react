import styled from "styled-components";

export const ShoppingCart = styled.div.attrs({ className: "shopping-cart" })`
  position: relative;

  .fa-cart-shopping {
    color: var(--color-yellow);
    font-size: 22px;
  }
`;

export const ShoppingCartOverlay = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-circle);
  border: 1px solid;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-yellow);
  font-size: 1.2em;
`;
