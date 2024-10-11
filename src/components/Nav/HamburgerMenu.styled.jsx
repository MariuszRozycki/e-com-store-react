import styled from "styled-components";

export const HamburgerMenu = styled.div.attrs({ id: "hamburger-menu", className: "hamburger-menu" })`
  cursor: pointer;
  .bars {
    display: block;
    width: 35px;
    height: 4px;
    margin: 4px 0;
    background-color: var(--color-yellow);
    border-radius: 50px;
    transition: var(--transition-standard);
  }

  /* bars transition */
  .bar-one {
    transform: translateY(10px) rotate(45deg);
    margin: 6px 0;
  }

  .bar-three {
    transform: translateY(-10px) rotate(-45deg);
    margin: 6px 0;
  }

  .bar-two {
    opacity: 0;
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
