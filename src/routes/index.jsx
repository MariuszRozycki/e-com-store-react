import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact } from "../pages";
import MainLayout from "../layouts";
import SingleProductPage from "../pages/SingleProductPage";

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
        path: "product/:id",
        element: <SingleProductPage />,
      },
    ],
  },
]);

export default router;
