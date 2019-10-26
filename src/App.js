import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={UserList} />
      <PrivateRoute path="/profile" component={UserProfile} />
    </Router>
  );
}

export default App;
