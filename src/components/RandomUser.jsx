import axios from "axios";
import { React, useEffect, useState } from "react";
import "../styles/RandomUser.css";

export const RandomUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res.data.results[0]);
        setUser(res.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const changeUser = () => {
    console.log("hola");
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        // console.log(res.data.results[0]);
        setUser(res.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h1>
        {user.name?.first} {user.name?.last}
      </h1>
      <img src={user.picture?.large} alt="userImage" />
      <p>{user?.email}</p>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};
