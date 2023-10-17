import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { Character } from "./Character";

function App() {
  // Renderizado de listas
  // const names = ["Angel", "Osiris", "Luis", "Limon", "Ana", "Osmar", "Mauro"];

  // Map
  /*
    // Parte Visual
    // callback del map --> Define la función que se va a ejecutar por cada elemento del arreglo.

    array.map((currentItem, indice, array) => {<Element> </Element>})
  */

  // const users = [
  //   {
  //     name: "Frank",
  //     favoriteAnimal: "Hedgehog",
  //   },
  //   {
  //     name: "Charlie",
  //     favoriteAnimal: "Lion",
  //   },
  //   {
  //     name: "Hank",
  //     favoriteAnimal: "Elephant",
  //   },
  //   {
  //     name: "Ivy",
  //     favoriteAnimal: "Parrot",
  //   },
  //   {
  //     name: "Ella",
  //     favoriteAnimal: "Dolphin",
  //   },
  //   {
  //     name: "Alice",
  //     favoriteAnimal: "Penguin",
  //   },
  //   {
  //     name: "Bob",
  //     favoriteAnimal: "Kangaroo",
  //   },
  //   {
  //     name: "David",
  //     favoriteAnimal: "Tiger",
  //   },
  //   {
  //     name: "Grace",
  //     favoriteAnimal: "Ostrich",
  //   },
  //   {
  //     name: "Ana",
  //     favoriteAnimal: "Hedgehog",
  //   },
  // ];

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      {/* <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{names[3]}</li>
        <li>{names[4]}</li>
        <li>{names[5]}</li>
        <li>{names[6]}</li>
      </ul> */}
      {/* <ul>
        {names.map((item, indice) => (
          <li key={item}> {item} </li>
        ))}
      </ul> */}
      {/* <ul>
        {users.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
      <ul>
        {characters.map((character, index) => (
          <Character key={character.id} characterData={character} />
        ))}
      </ul>
    </div>
  );
}

export default App;
