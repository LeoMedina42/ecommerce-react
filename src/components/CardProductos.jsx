import { Link } from "react-router-dom";
import "./CardProductos.css";

const CardProductos = ({ producto }) => {
  return (
    <div className="card-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>

      <Link
        to={`/producto/${producto.id}`}
        className="btn-ver-producto"
      >
        Ver producto
      </Link>
    </div>
  );
};

export default CardProductos;
