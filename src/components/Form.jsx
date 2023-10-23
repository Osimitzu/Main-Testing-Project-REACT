import { React, useState } from "react";

const Form = () => {
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);
  const [genValue, setGenValue] = useState("");

  const handleSubmit = (e) => {
    // Las propiedades del objeto que generemos deben coincidir con las propiedades esperadas por la base de datos
    const data = {
      name: nameValue,
      age: ageValue,
      email: emailValue,
      terms: isAccepted,
      genre: genValue,
    };
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* form es una etiqueta que nos permite agrupar inputs */}
      <div>
        <label htmlFor="user-name">Nombre</label>
        <input
          value={nameValue}
          name="userName"
          id="user-name"
          type="text"
          onChange={(e) => setNameValue(e.target.value)}
        />
        {console.log(nameValue)}
      </div>
      <div>
        <label htmlFor="user-age">Edad</label>
        <input
          value={ageValue}
          type="number"
          name="userAge"
          id="user-age"
          onChange={(e) => setAgeValue(e.target.value)}
        />
        {console.log(ageValue)}
      </div>
      <div>
        <label htmlFor="user-mail">Correo</label>
        <input
          value={emailValue}
          type="email"
          name="userEmain"
          id="user-mail"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        {console.log(emailValue)}
      </div>
      <div>
        <label htmlFor="terms">Aceptar terminos y condiciones</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={isAccepted}
          onChange={(e) => setIsAccepted(e.target.checked)}
        />
        {console.log(isAccepted)}
      </div>
      <div>
        <strong>Genero</strong>
        <br />
        <label htmlFor="male">Masculino</label>
        <input
          type="radio"
          name="genre"
          id="male"
          checked={genValue === "Hombre"}
          onChange={() => setGenValue("Hombre")}
        />

        <label htmlFor="female">Femenino</label>
        <input
          type="radio"
          name="genre"
          id="female"
          checked={genValue === "Mujer"}
          onChange={() => setGenValue("Mujer")}
        />
        {console.log(genValue)}
      </div>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Form;
