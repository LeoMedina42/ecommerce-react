import CardProductos from "../components/CardProductos"
import "./PaginaPrincipal.css";

const productos = [
  {
    id: 1,
    nombre: "Notebook Gamer",
    precio: 1200000,
    imagen: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    nombre: "Mouse Gamer",
    precio: 35000,
    imagen: "",
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    precio: 90000,
    imagen: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    nombre: "Auriculares RGB",
    precio: 150000,
    imagen: "https://via.placeholder.com/300",
  },
];

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
