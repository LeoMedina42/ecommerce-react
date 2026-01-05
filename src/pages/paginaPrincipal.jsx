import CardProductos from "../components/CardProductos";
import productos from "../data/data";
import "./PaginaPrincipal.css";

const PaginaPrincipal = () => {
  return (
    <main className="pagina-principal">
      <h1>Productos destacados</h1>

      <div className="grilla-productos">
        {productos.map((producto) => (
          <CardProductos key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
};

export default PaginaPrincipal;
