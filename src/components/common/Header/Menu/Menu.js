import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Counter
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/todos" className="nav-link">
          Todos
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/tiktak" className="nav-link">
          TikTak
        </NavLink>
      </li>
      <li className="nav-item" style={{ display: "none" }}>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/persons" className="nav-link">
          Persons
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/letters" className="nav-link">
          Letters
        </NavLink>
      </li>
    </ul>
  );
};
export default Menu;
