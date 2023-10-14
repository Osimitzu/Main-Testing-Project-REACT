import { React, useState, useEffect } from "react";
import axios from "axios";
import "../styles/Pokemon.css";

export const Pokemon = ({ data, pokeChange }) => {
  const [isDecimeters, setIsDecimeters] = useState(true);
  const [isPound, setIsPound] = useState(true);

  const changeH = () => {
    setIsDecimeters(!isDecimeters);
  };

  const changeW = () => {
    setIsPound(!isPound);
  };

  return (
    <div className="pokeContainer">
      <h1 className="pokeName">{data.name}</h1>
      <img
        src={data.sprites?.other.home.front_default}
        alt="Pokemon"
        className="pokeImage"
      />
      <h3 className="pokeWeight">
        <span>weight:</span>
        {isPound ? `${data.weight} hg` : `${data.weight / 10} kg`}
      </h3>
      <h3 className="pokeHeight">
        <span>height:</span>
        {isDecimeters ? `${data.height} dm` : `${data.height / 10} m`}
      </h3>
      <h3 className="pokeType">
        <span>type:</span>
        {data.types?.[0].type.name}
      </h3>

      <div className="buttons">
        <button onClick={changeH} className="pokeButton">
          Change height
        </button>
        <button onClick={pokeChange} className="pokeButton">
          Change Pokemon
        </button>
        <button onClick={changeW} className="pokeButton">
          Change weight
        </button>
      </div>
    </div>
  );
};
