import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    background: var(--color-nonary);
    box-sizing: border-box;
  }

  body {
    display: flex;
    min-height: 100vh;
  }

  #root {
    height: 100%;
    width: 100%;
    height: auto;
  }

  #main-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .outlet-content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  html {
    /* colors */
  --color-black: #000;
  --color-primary: #12273c;
  --color-secondary: #183f60;
  --color-tertiary: #183f60;
  --color-quaternary: #20639a;
  --color-quinary: #2679bd;
  --color-senary: #72b1e4;
  --color-septenary: #72b1e4;
  --color-octonary: #a7d2f4;
  --color-nonary: #ddeffd;
  --color-denary: #f2f6ff;
  --color-white: #fff;
  --color-orange: #c44536;
  --color-yellow: #ffa210;
  --color-red: #772e25;
  --color-btn: var(--color-yellow);
  --fifth-color: #ede0d4;
  --sixth-color: #281c0e;
  --light-blue-color: #b1daec;
  --very-light-green-color: #f7fff8;
  --light-beige-color: #fff5ef;
  --light-green-color: #84a98c;
  --dark-blue-color: #243662;
  --very-dark-blue-color: #2f3e46;
  --very-dark-green-color: #79a086;

  --yellow-light-color: #ffe3b3;
  --active-color: var(--orange-color);
  --color-hover: rgb(53 57 58);
  --color-yellow-hover: rgb(170, 119, 35);

  /* radius */
  --border-radius-min: 5px;
  }

  h1, h2, h3, h4, h5, h6, label {
    font-family: "Sintony", system-ui;
  }

  p, a, ul, li, span {
    font-family: "Poppins", system-ui;
  } 

  a {
    color: var(--color-yellow);
    text-decoration-line: none;
  }
`;

export default GlobalStyle;
