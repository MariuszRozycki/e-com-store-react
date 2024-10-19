import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Pathname changed:", pathname);
    window.scrollTo(0, -60);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
