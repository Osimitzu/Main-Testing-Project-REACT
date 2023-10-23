import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Todo.css";

const Todo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    data.id = Date.now();
    console.log(data);
    emptyTask();
  };

  const defaultTask = () => {
    reset({
      title: "Default task",
      description: "Default description",
      completed: true,
    });
  };

  const emptyTask = () => {
    reset({
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <div className="container">
      <h1 className="title">Nueva Tarea</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="titleContainer">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            placeholder="Something"
            {...register("title", { required: true })}
          />
          {errors.title?.type === "required" && (
            <p role="alert" style={{ color: "tomato" }}>
              Title is required
            </p>
          )}
        </div>
        <div className="descriptionContainer">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="descriptión"
            cols="30"
            rows="10"
            placeholder="Something pending..."
            {...register("description", { required: true })}
          ></textarea>
          {errors.description?.type === "required" && (
            <p role="alert" style={{ color: "tomato" }}>
              Description is required
            </p>
          )}
        </div>
        <div className="completedContainer">
          <label htmlFor="completed">Completada</label>
          <input
            type="checkbox"
            id="completed"
            {...register("completed", { required: true })}
          />
          {errors.completed?.type === "required" && (
            <p role="alert" style={{ color: "tomato" }}>
              completed is required
            </p>
          )}
        </div>
        <div className="submitContainer">
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div>
        <button onClick={defaultTask}>Default Task</button>
      </div>
    </div>
  );
};

export default Todo;
