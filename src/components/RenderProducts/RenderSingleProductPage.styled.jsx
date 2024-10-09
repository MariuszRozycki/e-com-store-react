import styled from "styled-components";
import { SingleProduct } from "./RenderProducts.styled";

export const RenderSingleProductPage = styled(SingleProduct)`
  width: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-columns: 1fr;

  .single-product-img-wrap {
    height: 220px;
    width: 100%;
    border-top-right-radius: ${({ theme }) => theme.radius.singleProduct};
    border-top-left-radius: ${({ theme }) => theme.radius.singleProduct};
    overflow: hidden;
  }
`;
