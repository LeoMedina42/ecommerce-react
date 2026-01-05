import { Link } from "react-router-dom";
import "./CardProductos.css";

const CardProductos = ({ producto }) => {
  return (
    <div className="card-producto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="card-producto-img"
      />

      <div className="card-producto-body">
        <h3>{producto.nombre}</h3>
        <p className="precio">${producto.precio}</p>

        <Link to={`/producto/${producto.id}`} className="btn-ver">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default CardProductos;

