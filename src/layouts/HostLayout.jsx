import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  };

  return (
    <>
      <div className="host-nav-container">
        <nav className="host-nav">
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            end
            to="."
          >
            Dashboard
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
      </div>

      <div className="host-layout-container">
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
