import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink, withRouter } from "react-router-dom";

const LoggedInNav = props => {
  return (
    <>
      <ul style={{ paddingLeft: 0 }}>
        <NavLink to="/">User List</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </ul>
      <Button onClick={() => props.logOut(props)}>Log Out</Button>
    </>
  );
};

export default withRouter(LoggedInNav);
