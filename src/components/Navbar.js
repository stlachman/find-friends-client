import React from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      {localStorage.getItem("user") ? <LoggedInNav /> : <LoggedOutNav />}
    </nav>
  );
};

export default NavBar;
