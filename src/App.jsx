import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Theme>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Theme>
    </CartProvider>
  );
};

export default App;
