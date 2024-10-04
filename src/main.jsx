import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
