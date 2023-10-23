import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  // useForm --> Custom Hook
  // Luego lo ejecutamos. Retorna un objeto. Vamos a desestructurar dos propiedades muy importantes: register y handleSubmit.
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          placeholder="Name"
          {...register("username")}
        />
      </div>
      {/* <div>
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
      </div> */}
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="12345678"
          {...register("password")}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Form;
