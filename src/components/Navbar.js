import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">User List</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
