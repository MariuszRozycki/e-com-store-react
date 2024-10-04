import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    btn: "var(--color-btn)",
    header: "var(--color-secondary)",
    footer: "var(--color-secondary)",
    footerParagraph: "var(--color-yellow)",
  },
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
