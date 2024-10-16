import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, SingleProductPage, CheckoutSuccess } from "../pages";
import MainLayout from "../layouts";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout-success",
        element: <CheckoutSuccess />,
      },
    ],
  },
]);

export default router;
