import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Chucknorris } from "./components/Chucknorris";
import { Emoji } from "./components/Emoji";
import { RandomUser } from "./components/RandomUser";

function App() {
  /*
  // Ejemplo de una promesa:
  const functionPromise = new Promise((resolve, reject) => {
    // Código de la promesa
    if (condicionQueDecidiraSiLaPromesaSeCumpleONo) {
      // Si se cumple
      resolve("Valor que se devulve si la promesa se cumple");
    } else {
      // No se cumple
      reject("Error que hizo que la promesa fallara");
    }
  });

  // Para Utilizar la promesa:
  promesa
    .then((res) => {
      // El then se ejecuta cuando la promesa es resuelta con exito
      console.log(res); // "valor que se ejecuta de la promesa al cumplirse."
    })
    .catch((err) => {
      // El catch se ejecutara cuando la promesa es rechazada.
      console.log(err); // Error que hizo que la promesa fallara.
    });
  */
  return (
    <div className="App">
      {/* <Chucknorris />
      <Emoji /> */}
      <RandomUser />
    </div>
  );
}

export default App;
