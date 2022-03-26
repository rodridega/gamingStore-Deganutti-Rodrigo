import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Contacto } from "./components/Contacto/Contacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Carrito } from "./components/Carrito/Carrito";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Bienvenido a V-Gaming"} />}
            />
            <Route
              path="/productos/:caterogyId"
              element={<ItemListContainer />}
              greeting={"Bienvenido a V-Gaming"}
            />
            <Route path="/detail/:gameId" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/detail" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Carrito />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
