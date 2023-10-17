import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { Countries } from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {/* {characters.map((character) => (
          <Character key={character.id} characterData={character} />
        ))} */}
        {countries.map((country, index) => (
          <Countries key={country.cca2} countryData={country} />
        ))}
      </ul>
    </div>
  );
}

export default App;
