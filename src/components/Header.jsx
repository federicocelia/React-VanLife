import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
export default function Header() {
  return (
    <header>
      <nav className="header">
        <div className="brand-container">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active-link" : null;
            }}
            to="/"
          >
            <img className="brand" src={logo} alt="VanLife logo" />
          </NavLink>
        </div>
        <ul className="navigation">
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
              to="/vans"
            >
              Vans
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
              to="/host"
            >
              Host
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
