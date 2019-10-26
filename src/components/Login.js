import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
