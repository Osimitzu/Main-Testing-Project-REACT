import { useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";

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
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(0);

  const decrement = () => {
    setNum(num - 1);
  };

  const increment = () => {
    setNum(num + 1);
  };

  const showHide = () => {
    setShow(!show);

    setColor(changeColor);
  };

  const changeColor = () => {
    let newColor;

    do {
      newColor = Math.floor(Math.random() * 10);
    } while (newColor === color);

    setColor(newColor);
  };

  return (
    <div className="App" style={{ backgroundColor: colors[color] }}>
      <h1>Contador</h1>
      <div className="container1">
        <h2>{num}</h2>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <h1>Password Input</h1>
      <div className="container2">
        <input
          id="password"
          type={show ? "text" : "password"}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={showHide}>
          <i className="bx bxs-low-vision"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
