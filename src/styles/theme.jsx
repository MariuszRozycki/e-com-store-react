import { ThemeProvider } from "styled-components";
import { breakpoints, device } from "../styles/Breakpoints";

const theme = {
  color: {
    btn: "var(--color-btn)",
    header: "var(--color-secondary)",
    footer: "var(--color-secondary)",
    footerParagraph: "var(--color-yellow)",
    backgroundSingleProduct: "var(--color-white)",
  },

  radius: {
    singleProduct: "var(--border-radius-standard)",
    btn: "var(--border-radius-small)",
  },
  breakpoints,
  device,
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
