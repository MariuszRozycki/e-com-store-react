import styled from "styled-components";

export const ShoppingCartIcon = styled.div.attrs({ className: "shopping-cart-icon" })`
  position: relative;
  cursor: pointer;

  .fa-cart-shopping {
    color: var(--color-white);
    font-size: 22px;
  }
`;

export const ShoppingCartIconOverlay = styled.div.attrs({ className: "shopping-card-icon-overlay" })`
  position: absolute;
  top: -19px;
  right: 10px;
  width: 70%;
  height: 70%;
  border-radius: var(--border-radius-circle);
  border: 1px solid;
  z-index: 1;
  background-color: var(--color-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  font-size: 12px;
  font-weight: 600;
  padding: 5px;
`;
