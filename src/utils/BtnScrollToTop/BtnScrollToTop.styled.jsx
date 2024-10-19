import styled from "styled-components";

export const BtnScrollToTop = styled.button.attrs({ className: "scroll-button" })`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--color-yellow);
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(20px)")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
  }

  svg {
    color: var(--white-color);
    transition: color 0.5s;
  }

  &:hover svg {
    color: var(--hover-color);
  }
`;
