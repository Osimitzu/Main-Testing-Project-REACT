import React from "react";
// import "boxicons";

const UserCard = ({ userData }) => {
  return (
    <div className="user-card">
      <h1>
        {userData?.name.title} {userData?.name.first} {userData?.name.last}
      </h1>
      <img src={userData?.picture.thumbnail} alt="gatito" />
      <ul>
        <li>
          <i className="bx bx-envelope"></i>
          {userData?.email}
        </li>
        <li>
          <i className="bx bx-phone"></i>
          {userData?.phone}
        </li>
        <li>
          <i className="bx bx-home"></i>
          {userData?.location.city} {userData?.location.country}{" "}
          {userData?.location.postcode}
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
