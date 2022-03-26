import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const enCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  };
  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => prod.cantidad + acc, 0);
  };

  const totalCarrito = () => {
    return carrito.reduce((acc, prod) => prod.cantidad * prod.precio + acc, 0);
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarCarrito,
        enCarrito,
        cantidadCarrito,
        totalCarrito,
        vaciarCarrito,
        eliminarDelCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
