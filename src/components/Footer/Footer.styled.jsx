import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${(props) => props.theme.color.footer};

  p {
    color: ${(props) => props.theme.color.footerParagraph};
  }
`;
