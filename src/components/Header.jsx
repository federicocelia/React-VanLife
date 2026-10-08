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
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/vans">
              Vans
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/account">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
