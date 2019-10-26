import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Registration = props => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  });

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", userInfo)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    setUserInfo({
      username: "",
      password: "",
      firstName: "",
      lastName: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          value={userInfo.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          value={userInfo.lastName}
          name="lastName"
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="username">Username</label>
        <input
          value={userInfo.username}
          name="username"
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          value={userInfo.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
