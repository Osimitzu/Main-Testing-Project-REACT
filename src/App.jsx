import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import users from "./data/users.json";

function App() {
  const colors = [
    "#FFB6C1", // Rosa pastel
    "#87CEEB", // Azul cielo pastel
    "#98FB98", // Verde menta pastel
    "#FFD700", // Amarillo pastel
    "#FFA07A", // Melocotón pastel
    "#9370DB", // Lavanda pastel
    "#FFC0CB", // Rosa claro pastel
    "#20B2AA", // Verde azulado pastel
    "#FFDAB9", // Melocotón claro pastel
    "#B0E0E6", // Azul celeste pastel
  ];

  const [index, setIndex] = useState(0);
  // const [indexColor, setIndexColor] = useState(0);
  // eliminamos el useState de color ya que hace lo mismo que el de indice y lo podemos reciclar porque son el mismo numero de colores que de usuarios.

  const changeUser = () => {
    // if (index === users.length - 1) {
    //   //Estoy en el ultimo elemento del arreglo
    //   //regresar al primer elemento
    //   setIndex(0);
    // } else {
    //   // Que continue avanzando
    //   // El indice va a aumentar en 1
    //   setIndex(index + 1);
    // }
    // Se hace random, pero existe la posibilidad de que se repita el indice varias veces seguidas:
    // const index = Math.floor(Math.random() * 10);
    // setIndex(index);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * 10);
    } while (newIndex === index);

    setIndex(newIndex);
    console.log(newIndex);
  };

  return (
    <div className="App" style={{ backgroundColor: colors[index] }}>
      <UserCard userData={users[index]} />
      <button onClick={changeUser}>
        <i className="bx bx-shuffle"></i>
      </button>
    </div>
  );
}

export default App;
