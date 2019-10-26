import React from "react";
import Container from "@material-ui/core/Container";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <NavBar />
      {children}
    </Container>
  );
};

export default Layout;
