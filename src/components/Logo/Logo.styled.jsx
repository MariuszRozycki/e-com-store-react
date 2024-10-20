import styled from "styled-components";

export const Logo = styled.div.attrs({ className: "logo-wrapper" })`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 5px;
  width: 100%;
  height: 30px;

  .img-wrapper {
    width: 30px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .logo-text {
    color: var(--color-yellow);
  }
`;
