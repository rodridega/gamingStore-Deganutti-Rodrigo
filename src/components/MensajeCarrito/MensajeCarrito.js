import React from "react";
import { Link } from "react-router-dom";

export const MensajeCarrito = () => {
  return (
    <div className="text-white text-center my-5">
      <h3>No hay productos en tu carrito, agrega alguno!</h3>
      <Link to={"/"} className="btn btn-light mt-4 fs-4">
        Ir a lista de Juegos
      </Link>
    </div>
  );
};
