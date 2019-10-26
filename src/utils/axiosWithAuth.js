import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://find-friends-api.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
