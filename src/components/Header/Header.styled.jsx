import styled from "styled-components";

export const Header = styled.header.attrs({ className: "header" })`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.backgroundColor.header};
  height: 80px;
  display: flex;
  width: 100%;
  z-index: 1;
`;
