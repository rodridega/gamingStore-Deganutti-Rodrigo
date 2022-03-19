import React from "react";
import { Link } from "react-router-dom";
import "./CartWidgets.css";

const CartWidgets = () => {
  return (
    <Link to="/" id="carrito">
      <img src="/images/cart.png" />
    </Link>
  );
};

export default CartWidgets;
