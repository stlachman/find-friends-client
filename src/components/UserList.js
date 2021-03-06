import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const currentID = localStorage.getItem("id");
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${currentID}/potentialFriends`)
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(err => {
        console.error(err);
      });
  }, [currentID]);

  return (
    <div>
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
