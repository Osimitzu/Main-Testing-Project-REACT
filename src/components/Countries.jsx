import { useEffect, useState } from "react";
import axios from "axios";

export const Countries = ({ countryData }) => {
  return (
    <li className="container">
      <h1>{countryData.name?.common}</h1>
      <img src={countryData.flags?.png} alt="countryImage" />
      <h2>
        <span>Capital:</span>
        {countryData.capital}
      </h2>
      <h2>
        <span>Continent:</span>
        {countryData.continents?.[0]}
      </h2>
    </li>
  );
};
