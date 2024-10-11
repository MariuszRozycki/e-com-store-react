import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor.footer};

  p {
    color: ${({ theme }) => theme.color.footerParagraph};
  }
`;
