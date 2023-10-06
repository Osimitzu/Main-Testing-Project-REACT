import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      {/* <Button /> */}
      <Card
        title="Noches Reversibles"
        album="Cuentos chinos para niños del Japón"
        band="Love of lesbian"
        date="2007"
        gen="Rock Indie"
      />
      <Card
        title="Hija de la luna"
        album="Dicen"
        band="Surfistas del Sistema"
        date="2023"
        gen="Alternative Indie"
      />
    </>
  );
}

export default App;
