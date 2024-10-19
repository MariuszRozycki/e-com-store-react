import styled from "styled-components";

export const AboutContent = styled.div.attrs({ className: "about-content" })`
  display: grid;
  grid-gap: 15px;

  .img-wrapper {
    height: 200px;
    max-width: 350px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radius.picture};
    }
  }

  a {
    margin: 10px auto;
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr 1fr;

    .element-wrapper {
      display: grid;
      grid-template-rows: auto auto;
    }

    .our-mission {
      h2 {
        margin-top: 0;
      }

      grid-row: 1/2;
    }

    .last-paragraph {
      grid-column: 1/3;
      grid-row: 3/4;
    }

    a {
      grid-column: 1/3;
      grid-row: 4/5;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;

    .element-wrapper {
      align-self: stretch;
      grid-template-rows: auto auto;
    }

    .last-paragraph {
      grid-column: 1/4;
      grid-row: 4/5;
    }

    a {
      grid-column: 1/4;
      grid-row: 3/4;
    }
  }
`;
