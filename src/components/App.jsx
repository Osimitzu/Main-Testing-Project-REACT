import { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import UsersList from "./UsersList";
// import Todo from "./Todo";
// import { Form } from "react-hook-form";

function App() {
  // Create Read Update Delete
  // Acciones mas basicas que podemos hacer con nuestras entidades

  const [users, setUsers] = useState([
    {
      id: 1,
      email: "angel@academlo.com",
      password: "12345678",
      first_name: "Osiris",
      last_name: "Contreras",
      birthday: "1997-10-15",
    },
  ]);

  const [userUpdate, setUserUpdate] = useState(null);

  // Create (añadimos un nuevo usuario)
  const addUser = (userData) => {
    // Mutabilidad // Inmutabilidad
    // Los arreglos u objetos generados con "const" si pueden sufrir modificaciones SIEMPRE Y CUANDO esas modificaciones no impliquen REASIGNACIONES.
    // Los estados NO DEBEN mutar.
    // Las modificaciones en un estado SOLO deben realizarse a traves de la función seteadora.

    setUsers([...users, userData]);
  };

  // Delete (eliminar un usuario)
  const deleteUser = (idUser) => {
    // FILTER
    // Filtrar todos los usuarios QUE NO SEAN el que queremos eliminar.
    // El usuario que queremos eliminar no estaria dentro del arreglo que se genera con el filter.

    const filteredUsers = users.filter((user) => user.id !== idUser);

    setUsers(filteredUsers);
  };

  const selectUser = (userData) => {
    // console.log(userData);
    setUserUpdate(userData);
  };

  const userActualization = (userData) => {
    // Encontrar dentro del arreglo del estado el objeto(usuario) que va a ser actualizado
    const index = users.findIndex((user) => user.id === userData.id);
    // Remplazar el objeto actual por el objeto userData
    users[index] = userData;
    // Seteamos el estado
    setUsers([...users]);
    // Vaciar el formulario
    setUserUpdate(null);
  };

  return (
    <div className="App">
      <h1>Clase 17</h1>
      {/* <Todo /> */}
      <Form
        createUser={(data) => addUser(data)}
        selectedUser={userUpdate}
        updateUser={(data) => userActualization(data)}
      />
      <UsersList
        usersData={users}
        deleteHandler={(id) => deleteUser(id)}
        selectUser={(data) => selectUser(data)}
      />
    </div>
  );
}

export default App;
