import "../styles/UsersList.css";

const UsersList = ({ usersData, deleteHandler }) => {
  return (
    <ul>
      {usersData?.map((user) => (
        <li key={user.id}>
          <h4>
            <span>Nombre: </span>
            {user.first_name} {user.last_name}
          </h4>
          <h4>
            <span>Email: </span>
            {user.email}
          </h4>
          <h4>
            <span>Cumpleaños: </span>
            {user.birthday}
          </h4>
          <button onClick={() => deleteHandler(user.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
