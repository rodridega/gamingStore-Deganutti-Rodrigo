import React, { useContext } from "react";
import { Link} from "react-router-dom";
import {ImCart} from 'react-icons/im';
import "./CartWidgets.css";
import { Badge } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartWidgets = () => {

  const {cantidadCarrito} = useContext(CartContext)

  return (
    <Link to="/cart" id="carrito">
      <ImCart /> <Badge pill>{cantidadCarrito()} </Badge>
    </Link>
  );
};

export default CartWidgets;
