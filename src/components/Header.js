import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>🍦 Sweet Scoop</h1>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/flavors">Flavors</Link>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

export default Header;