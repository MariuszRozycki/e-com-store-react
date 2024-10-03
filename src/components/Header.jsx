import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">eCom</Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
