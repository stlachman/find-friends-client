import React from "react";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default Layout;
