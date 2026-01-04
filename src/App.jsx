import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import PaginaPrincipal from "./pages/paginaPrincipal";
import DetalleProducto from "./pages/detalleProducto";
import Administracion from "./pages/administracion";
import Login from "./pages/login";
import Registro from "./pages/registro";
import AcercaDeNosotros from "./pages/acercaDenosotros";
import Error404 from "./pages/error404";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
