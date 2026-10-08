import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
export default function Header() {
  return (
    <header>
      <nav className="header">
        <div className="brand-container">
          <img className="brand" src={logo} alt="VanLife logo" />
        </div>
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
