import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";
import "./Carrito.css";
import { MensajeCarrito } from "../MensajeCarrito/MensajeCarrito";

export const Carrito = () => {
  const { carrito, totalCarrito, vaciarCarrito, eliminarDelCarrito } =
    useContext(CartContext);
  return (
    <Container className="text-white">
      <h2 className="fs-1 m-4 text-center">Tu Carrito de compras</h2>
      <hr />

      {carrito.length === 0 ? (
        <MensajeCarrito />
      ) : (
        (carrito.map((prod) => {
          return (
            <div key={prod.id} className="d-flex my-3">
              <div className="border rounded mx-4 cardCarrito">
                <img src={prod.img} alt={prod.nombre} />
              </div>
              <div>
                <h3>{prod.nombre}</h3>

                <p>Cantidad: {prod.cantidad} </p>
                <p>Precio: ${prod.precio * prod.cantidad} </p>
                <Button
                  variant="danger"
                  className="align-self-end"
                  onClick={() => eliminarDelCarrito(prod.id)}
                >
                  {" "}
                  <BsTrash />{" "}
                </Button>
              </div>
            </div>
          );
        }))
      )}

      <hr />
      <h3 className="text-end">Total: ${totalCarrito()} </h3>
      <Button variant="danger" onClick={vaciarCarrito}>
        Vaciar Carrito
      </Button>
    </Container>
  );
};
