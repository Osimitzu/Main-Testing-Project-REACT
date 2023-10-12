import { React, useState, useEffect } from "react";
import axios from "axios";

export const Chucknorris = () => {
  // 1.- Importar lo necesario.
  // 2.- Crear un estado para guardar la info y guardarla despues.
  // 3.- Crear un useEffect.
  // 4.- Ejecutar axios para realizar la petición dentro del useEffect.
  // 5.- Guardamos la respuesta en el estado y ocupamos donde corresponda.

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const changeJoke = () => {
    console.log("Hola");
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <p>{character?.value}</p>
      <button onClick={changeJoke}>Otro chiste</button>
    </div>
  );
};
