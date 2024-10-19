import { Header, Footer } from "../components";
import ScrollToTop from "../utils/ScrollToTop";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

const MainLayout = () => {
  const headerRef = useRef(null);

  return (
    <div id='main-layout'>
      <Header headerRef={headerRef} />
      <ScrollToTop headerRef={headerRef} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
