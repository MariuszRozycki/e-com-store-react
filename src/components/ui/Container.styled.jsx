import styled from "styled-components";

export const Container = styled.div.attrs({ className: "container" })`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

export const ContainerHeader = styled(Container)`
  justify-content: space-between;
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
