import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import Bulb from "./components/Bulb";

function App() {
  const [light, setLight] = useState(false);

  const isOff = () => {
    setLight(!light);
  };

  return (
    <div className="App">
      <Bulb isVisible={light} isOn={isOff} />
      <Bulb isVisible={light} isOn={isOff} />
      <Bulb isVisible={light} isOn={isOff} />
      <Bulb isVisible={light} isOn={isOff} />
    </div>
  );
}

export default App;
