import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ nombre, precio, img, description, stock }) => {
  return (
    <div className="itemDetailCard">
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
        <ItemCount stock={stock} />
        <Link to="/" className="mx-auto mt-2">
          <Button variant="light">Volver</Button>
        </Link>
      </div>
    </div>
  );
};
