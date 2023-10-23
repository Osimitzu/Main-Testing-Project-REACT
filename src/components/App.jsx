import { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import Todo from "./Todo";
// import { Form } from "react-hook-form";

function App() {
  return (
    <div className="App">
      <h1>Clase 15</h1>
      {/* <Form /> */}
      <Todo />
    </div>
  );
}

export default App;
