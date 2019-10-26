import React from "react";
import { NavLink } from "react-router-dom";

const LoggedOutNav = () => {
  return (
    <ul style={{ paddingLeft: 0 }}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </ul>
  );
};

export default LoggedOutNav;
