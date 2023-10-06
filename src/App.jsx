import { useState } from "react";
import "./App.css";

function App() {
  // function circleArea(radius) {
  //   const pi = 3.1416;

  //   return pi * radius ** 2;
  // }

  // useState --> Hook de estado.

  // hooks --> Son funciones, tienen valor de retorno. Se ejecutan.
  // crear variable/s y almacenar valor de retorno del hook.

  // useState devuelve un state y una función seteadora del state. Ejemplo:
  // const [state, setState] = useState(valorInicial);
  // setState(nuevoValor);

  const [counter, setCounter] = useState(0);

  const likesIncrement = () => {
    // console.log("Nuevo Like (/OoO/)");
    setCounter(counter + 1);
  };

  const likesDecrement = () => {
    // console.log("Quitaron un Like :c");
    // setCounter(counter - 1);
    // if (counter < 1) {
    //   setCounter(counter);
    // }
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <h1>Total de likes: {counter}</h1>
      <button onClick={likesIncrement}>Like</button>
      <button onClick={likesDecrement}>Cancelar like</button>
    </div>
  );
}

export default App;
