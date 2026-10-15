import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import avatar from "../assets/images/avatar-icon.png";
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
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "login-link active" : "login-link"
              }
            >
              <img src={avatar} className="login-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
