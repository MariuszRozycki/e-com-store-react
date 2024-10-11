import styled from "styled-components";

export const Nav = styled.nav.attrs({ className: "nav" })`
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: ${({ theme }) => theme.padding.container};
  margin: 0;
  z-index: 1;
  transition: ${({ theme }) => theme.transitions.standard};
  transform: ${({ isMenuOpen }) => (isMenuOpen ? "translate(0)" : "translate(-100vw)")};

  a {
    text-align: center;
    width: 100%;
    font-size: 22px;
  }
`;
