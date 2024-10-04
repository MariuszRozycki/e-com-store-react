import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div id='main-layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
