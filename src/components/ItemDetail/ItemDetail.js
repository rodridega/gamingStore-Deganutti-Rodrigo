import React, { useContext, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ nombre, precio, img, description, stock, id }) => {
  const [cantidad, setCantidad] = useState(1);

  const { agregarCarrito, enCarrito } = useContext(CartContext);

  const handleAgregar = () => {
    if (cantidad === 0) {
      return;
    }
    if (!enCarrito(id)) {
      const prodCarrito = {
        nombre,
        precio,
        id,
        stock,
        cantidad,
        img,
      };
      agregarCarrito(prodCarrito);
    }
  };

  return (
    <div className="itemDetailCard animate__animated animate__fadeIn">
      <div className="h-100 w-100 overflow-auto">
        <img className="imgCard" src={img} alt={nombre} />
      </div>
      <div className="text-white m-4 d-flex flex-column justify-content-evenly">
        <h3 className="text-center"> {nombre} </h3>
        <hr />
        <p className="gameDesc">{description} </p>
        <p className="fs-2">{precio === 0 ? "Gratis" : `$ ${precio}`}</p>
        {precio !== 0 && (
          <p className="fs-5">O en 12 cuotas de ${parseInt(precio / 12)}</p>
        )}

        {enCarrito(id) ? (
          <>
            <Link to="/" className="mx-auto my-3">
              <Button variant="light">Volver a la tienda</Button>
            </Link>
            <Link to="/cart" className="mx-auto">
              <Button variant="light">Terminar mi Compra</Button>
            </Link>
          </>
        ) : stock <= 0 ? (
          <>
            <p className="text-center fs-2">Sin stock</p>
            <Link to="/" className="mx-auto">
              <Button variant="light">Volver a la tienda</Button>
            </Link>
          </>
        ) : (
          <>
            <ItemCount
              stock={stock}
              counter={cantidad}
              setCounter={setCantidad}
            />
            <Row></Row>
            <Button variant="dark" size={"md"} onClick={handleAgregar}>
              Agregar al carrito
            </Button>
            <Link to="/" className="mx-auto my-3">
              <Button variant="light">Volver a la tienda</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
