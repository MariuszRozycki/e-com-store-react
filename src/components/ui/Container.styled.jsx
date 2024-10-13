import styled from "styled-components";

export const Container = styled.div.attrs({ className: "container" })`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding.container};
  display: flex;
  align-items: center;
`;

export const ContainerHeader = styled(Container)`
  gap: 20px;
  justify-content: space-between;
  position: relative;

  .fa-cart-shopping {
    color: var(--color-white);
    font-size: 22px;
  }
`;

export const ContainerFooter = styled(Container)`
  justify-content: center;
`;

export const ContainerOutletContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 100%;
`;
