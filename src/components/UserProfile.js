import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    age: userInfo.age || 0,
    gender: userInfo.gender || "",
    location: userInfo.location || "",
    description: userInfo.description || "",
    interests: userInfo.interests || []
  });

  const handleChange = e => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleInterests = e => {
    const item = e.target;
    if (item.checked && !profile.interests.includes(item.value)) {
      setProfile({
        ...profile,
        interests: [...profile.interests, item.value]
      });
    } else if (!item.checked && profile.interests.includes(item.value)) {
      setProfile({
        ...profile,
        interests: profile.interests.filter(interest => interest !== item.value)
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = localStorage.getItem("id");
    axiosWithAuth()
      .put(`/users/${id}`, profile)
      .then(res => {
        const { age, gender, location, description, interests } = res.data.user;
        setProfile({ age, gender, location, description, interests });
        localStorage.setItem(
          "user",
          JSON.stringify({ age, gender, location, description, interests })
        );
      })
      .catch(err => {
        console.log("here", err);
      });
  };

  const checkedBox = interest => {
    return profile.interests.includes(interest) ? "checked" : "";
  };

  return (
    <div>
      <h2>Update Your Profile</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="age">Age</label>
          <input
            name="age"
            value={profile.age}
            onChange={handleChange}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            name="location"
            value={profile.location}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            value={profile.description}
            onChange={handleChange}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <input
            onChange={handleInterests}
            id="coding"
            name="coding"
            type="checkbox"
            value="coding"
            checked={checkedBox("coding")}
          />
          <label htmlFor="coding">Coding</label>
        </div>

        <div>
          <input
            onChange={handleInterests}
            id="music"
            name="music"
            value="music"
            type="checkbox"
            checked={checkedBox("music")}
          />
          <label htmlFor="music">Music</label>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
