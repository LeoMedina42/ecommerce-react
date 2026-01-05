import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import PaginaPrincipal from "./pages/paginaPrincipal";
import DetalleProducto from "./pages/DetalleProducto";
import Administracion from "./pages/Administracion";
import Login from "./pages/login";
import Registro from "./pages/Registro";
import AcercaNosotros from "./pages/AcercaNosotros";
import Error404 from "./pages/Error404";



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acercanosotros" element={<AcercaNosotros />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

     
    </Router>
  );
}

export default App;
