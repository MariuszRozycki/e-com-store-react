import { ThemeProvider } from "styled-components";
import { breakpoints, device } from "../styles/Breakpoints";

const theme = {
  color: {
    btn: "var(--color-btn)",
    header: "var(--color-secondary)",
    footer: "var(--color-secondary)",
    footerParagraph: "var(--color-yellow)",
    backgroundSingleProduct: "var(--color-white)",
    productPrice: "var(--color-yellow)",
    productPriceBcg: "var(--color-quaternary)",
    productOldPriceBcg: "var(--color-secondary)",
  },

  boxShadows: {
    null: "var(--box-shadow-null)",
    light: "var(--box-shadow-light)",
    medium: "var(--box-shadow-medium)",
    hard: "var(--box-shadow-hard)",
  },

  radius: {
    singleProduct: "var(--border-radius-standard)",
    btn: "var(--border-radius-small)",
  },

  transitions: {
    standard: "var(--transition-standard)",
  },

  breakpoints,
  device,
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
