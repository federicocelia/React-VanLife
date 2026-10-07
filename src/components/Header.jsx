import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="header">
        <h2 className="brand">#VANLIFE</h2>
        <ul className="navigation">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <li className="nav-link">Vans</li>
          <li className="nav-link">Account</li>
        </ul>
      </nav>
    </header>
  );
}
