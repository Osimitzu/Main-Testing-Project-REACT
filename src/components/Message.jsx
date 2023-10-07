import React from "react";
import { useState } from "react";

export default function Message() {
  const [isVisible, setIsVisible] = useState(true);

  const hideShow = () => {
    // if (isVisible ? setIsVisible(false) : setIsVisible(true));
    // Otra opción (La de arriba funciona ifual):
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1 style={{ display: isVisible ? "block" : "none" }}>
        Este mensaje desaparece.
      </h1>
      <button onClick={hideShow}>Show//Hide</button>
    </div>
  );
}
