import { useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";

function App() {
  // console.log("Hola mundo");
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(100);

  const showHide = () => {
    setShow(!show);
  };

  const lessFive = () => {
    setNum(num - 5);
    if (num === 0) {
      setNum(100);
    }
  };

  // Sintaxis basica para useEffect()
  // useEffect(() => {
  //   // Efectos
  //   // Codigo que vamos a repetir en distintas partes del ciclo de vida del componente
  // }, []);

  // Si el useEffect no recibe un arreglo de dependencias, entonces cualquier cambio en propiedades o el estado, detonara el efecto. El useEffect no estaría controlado.

  // Cuando se agregan dependencias al arreglo de dependencias, el efecto se va a detonar.
  // 1.- Al inicio, cuando el componente carga.
  // 2.- Cuando alguna dependencia sufre cambios.

  useEffect(() => {
    console.log("Ocurrio una modificación");
  }, [value, show, num]);

  return (
    <div className="App">
      <Title titleText={value} />
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type={show ? "text" : "password"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={showHide}>
        <i className="bx bxs-low-vision"></i>
      </button>

      <h1>{num}</h1>
      <button onClick={lessFive}>Restar 5</button>
    </div>
  );
}

export default App;
