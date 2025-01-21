import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ logo, links, btn }) => {
  return (
    <nav>
      <div className="nav-items">
        <p className="logo">{logo}</p>
        <ul>
          {links?.map((link, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <NavLink className="btn" to={btn?.path}>
        {btn?.title}
      </NavLink>
    </nav>
  );
};

export default NavBar;
