import { React, useState, useEffect } from "react";
import axios from "axios";
import "../styles/Country.css";

export const Country = ({ data }) => {
  return (
    <div className="container">
      <h1 className="countryName">{data.name?.common}</h1>
      <img src={data.flags?.png} alt={data.flags?.alt} />
      <h2>Demography</h2>
      <p>
        <span>Population:</span>
        {data.population}
      </p>
      <p>
        <span>Area:</span>
        {`${data.area} km²`}
      </p>
      <h2>Location</h2>
      <p>
        <span>Continent:</span>
        {data.continents?.[0]}
      </p>
      <p>
        <span>Region:</span>
        {data.region}
      </p>
      <h2>Capital</h2>
      <p className="capital">
        <span>Capital:</span>
        {data.capital?.[0]}
      </p>
    </div>
  );
};
