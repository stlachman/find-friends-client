import React from "react";
import { Route, withRouter } from "react-router-dom";
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";
import NavBar from "../src/components/Navbar";
import { UserContext } from "./contexts/UserContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App(props) {
  const [user, setUser] = useLocalStorage("user", null);

  const logIn = (e, credentials) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const logOut = props => {
    localStorage.clear();
    setUser(null);
    props.history.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, logOut, logIn }}>
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

export default withRouter(App);
