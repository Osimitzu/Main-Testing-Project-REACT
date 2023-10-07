import React from "react";
import "../styles/Bulb.css";
import { useState } from "react";

export default function Bulb({ isVisible, isOn }) {
  // Pasamos todo a el padre(App) para recibir y mandar props:
  // const [light, setLight] = useState(false);

  // const isOff = () => {
  //   setLight(!light);
  // };

  return (
    <div className="container">
      <div
        className="bulb"
        style={{ backgroundColor: isVisible ? "yellow" : "whitesmoke" }}
      ></div>
      <button onClick={isOn}>On//Off</button>
    </div>
  );
}
