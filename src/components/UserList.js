import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const currentID = localStorage.getItem("id");
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${currentID}/all`)
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(err => {
        console.err(err);
      });
  }, [currentID]);

  return (
    <div>
      <Link to="/profile">Profile</Link>
      <h2>User List</h2>
      <ul>
        {users &&
          users.map(user => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
