import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Pokemon } from "./components/Pokemon";

function App() {
  const [pok, setPok] = useState({});
  const [idR, setIdR] = useState("totodile");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idR}`)
      .then((res) => {
        console.log(res.data);
        setPok(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idR]);

  const getRandomNumber = () => {
    const num = Math.floor(Math.random(1) * 251);
    console.log(num);
    setIdR(num);
  };

  return (
    <div className="App">
      <Pokemon data={pok} pokeChange={getRandomNumber} />
    </div>
  );
}

export default App;
