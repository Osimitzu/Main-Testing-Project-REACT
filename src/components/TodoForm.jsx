import { React, useState } from "react";
import "../styles/TodoForm.css";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSub = (e) => {
    const data = {
      id: Date.now(), // Para generar un id unico
      title: title,
      description: text,
      completed: isCompleted,
    };
    console.log(data);
    e.preventDefault();
    console.log("Se envio la tarea");
  };

  return (
    <div className="container">
      <h1 className="title">Nueva Tarea</h1>
      <form onSubmit={(e) => handleSub(e)}>
        <div className="titleContainer">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="titleName"
            id="title"
            placeholder="Something"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {console.log(title)}
        </div>
        <div className="descriptionContainer">
          <label htmlFor="description">Descripción</label>
          <textarea
            name="descriptionArea"
            id="descriptión"
            cols="30"
            rows="10"
            placeholder="Something pending..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          {console.log(text)}
        </div>
        <div className="completedContainer">
          <label htmlFor="completed">Completada</label>
          <input
            type="checkbox"
            name="finished"
            id="completed"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            required
          />
          {console.log(isCompleted)}
        </div>
        <div className="submitContainer">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
