import React from "react";
import cart from "../../images/cart.png";
import "./CartWidgets.css";

const CartWidgets = () => {
  return (
    <a href="#" className="mx-auto">
      <img src={cart} />
    </a>
  );
};

export default CartWidgets;
