import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { CartProvider } from "./contexts/CartContext";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <CartProvider>
      <Theme>
        <GlobalStyle />
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </Theme>
    </CartProvider>
  );
};

export default App;
