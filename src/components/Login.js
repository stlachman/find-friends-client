import React, { useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <UserContext.Consumer>
      {value => (
        <div>
          <form onSubmit={e => value.logIn(e, credentials)}>
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              value={credentials.username}
              type="text"
              name="username"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              value={credentials.password}
              type="password"
              name="password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Login;
