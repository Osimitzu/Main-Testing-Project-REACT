import React from "react";

export const Character = ({ characterData }) => {
  return (
    <li
      key={characterData.name}
      className="container"
      style={{ border: statusColor(character) }}
    >
      <h1>{characterData?.name}</h1>
      <img src={characterData.image} alt="characterImage" />
      <h2>{characterData.status}</h2>
      <h2>{characterData.species}</h2>
      <h2>{characterData.origin?.name}</h2>
    </li>
  );
};
