import React from "react";
import { UserContext } from "../contexts/UserContext";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

const NavBar = () => {
  return (
    <UserContext.Consumer>
      {value => (
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          {value.user ? (
            <LoggedInNav logOut={value.logOut} />
          ) : (
            <LoggedOutNav />
          )}
        </nav>
      )}
    </UserContext.Consumer>
  );
};

export default NavBar;
