import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src="/images/logo.webp" alt="logo" />
        <h1>Sweet Scoop</h1>
      </header>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/flavors">Flavors</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Header;