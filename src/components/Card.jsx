import "../styles/Card.css";
const Card = ({ title, album, band, date, gen }) => {
  // const { title, album, band, date, gen } = props;

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>
        <span>Álbum: </span>
        {album}
      </h3>
      <h3>
        <span>Banda: </span>
        {band}
      </h3>
      <h3>
        <span>Lanzamiento: </span>
        {date}
      </h3>
      <h3>
        <span>Género: </span>
        {gen}
      </h3>
    </div>
  );
};

export default Card;
