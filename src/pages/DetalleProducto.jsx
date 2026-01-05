import { useParams, Link } from "react-router-dom";
import productos from "../data/data";
import "./DetalleProducto.css";

const DetalleProducto = () => {
  const { id } = useParams();

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <h2 className="text-center mt-5">Producto no encontrado</h2>;
  }

  return (
    <main className="detalle-producto container">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid detalle-img"
          />
        </div>

        <div className="col-md-6">
          <h1>{producto.nombre}</h1>
          <h2 className="precio">${producto.precio}</h2>
		  <p className="mt-3">{producto.descripcion}</p>

          <button className="btn btn-success me-3">
            Agregar al carrito
          </button>

          <Link to="/" className="btn btn-outline-secondary">
            Volver
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetalleProducto;
