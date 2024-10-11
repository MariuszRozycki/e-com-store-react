import styled from "styled-components";

export const RenderProducts = styled.div.attrs({ className: "render-products" })`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  row-gap: 8px;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${({ theme }) => theme.device.large} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media ${({ theme }) => theme.device.extraLarge} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const SingleProduct = styled.div.attrs({ className: "single-product" })`
  background: ${({ theme }) => theme.color.backgroundSingleProduct};
  display: grid;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.singleProduct};
  box-shadow: ${({ theme }) => theme.boxShadows.light};

  grid-template-columns: auto;
  grid-template-rows: 220px;

  .single-product-img-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-top-right-radius: ${({ theme }) => theme.radius.singleProduct};
    border-top-left-radius: ${({ theme }) => theme.radius.singleProduct};
    grid-row: 1/2;
    grid-column: 1/2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      margin: auto;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  h2 {
    grid-row: 2/3;
  }

  p {
    grid-row: 3/4;
  }

  h2,
  h3,
  p {
    padding: 0 8px;
    margin: 8px 0;
    align-self: self-start;
  }

  button {
    margin: 20px auto;
    box-shadow: ${({ theme }) => theme.boxShadows.light};
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-rows: 220px 100px 80px auto;

    button {
      justify-self: center;
      align-self: center;
    }
  }
`;
