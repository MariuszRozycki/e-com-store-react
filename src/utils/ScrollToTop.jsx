import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ headerRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight || 0;
      window.scrollTo(0, -headerHeight);
    }
  }, [pathname, headerRef]);

  return null;
};

export default ScrollToTop;
