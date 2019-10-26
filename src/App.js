import React, { useState } from "react";
import { Route } from "react-router-dom";
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";
import NavBar from "../src/components/Navbar";
import { UserContext } from "./contexts/UserContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [user, setUser] = useLocalStorage("user", {});

  return (
    <UserContext.Provider value={{ user }}>
      <Layout>
        <NavBar />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={UserList} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
