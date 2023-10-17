import React from "react";

export const Character = ({ characterData }) => {
  const statusColor = (characterData) => {
    switch (characterData.status) {
      case "Alive":
        return "5px solid green";
      case "Dead":
        return "5px solid red";
      default:
        return "5px solid coral";
    }
  };

  return (
    <li className="container" style={{ border: statusColor(characterData) }}>
      <h1>{characterData?.name}</h1>
      <img src={characterData.image} alt="characterImage" />
      <h2>{characterData.status}</h2>
      <h2>{characterData.species}</h2>
      <h2>{characterData.origin?.name}</h2>
    </li>
  );
};
