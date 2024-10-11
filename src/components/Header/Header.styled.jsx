import styled from "styled-components";

export const Header = styled.header.attrs({ className: "header" })`
  background-color: ${(props) => props.theme.color.header};
  height: 80px;
  display: flex;
  width: 100%;
`;
