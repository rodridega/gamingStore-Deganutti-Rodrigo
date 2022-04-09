import {
  collection,
  addDoc,
  Timestamp,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";

export const Checkout = () => {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const generarOrden = async () => {
    const orden = {
      buyer: values,
      items: carrito,
      total: totalCarrito(),
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const juegosRef = collection(db, "juegos");

    const q = query(
      juegosRef,
      where(
        documentId(),
        "in",
        carrito.map((j) => j.id)
      )
    );
    const juegos = await getDocs(q);

    const outOfStock = [];

    juegos.docs.forEach((doc) => {
      const juego = carrito.find((j) => j.id === doc.id);
      if (doc.data().stock >= juego.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - juego.cantidad,
        });
      } else {
        outOfStock.push(juego);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, orden).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        vaciarCarrito();
      });
    } else {
      alert(
        `No hay stock suficiente para los siguientes productos: ${outOfStock
          .map((j) => j.nombre)
          .join(", ")}`
      );
    }
  };

  const [values, setValues] = useState({ nombre: "", email: "", tel: "" });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return;
    } else if (values.email.length < 7) {
      alert("El email debe tener al menos 7 caracteres");
      return;
    } else if (values.tel.length < 7) {
      alert("El teléfono debe tener al menos 7 caracteres");
      return;
    } else if (carrito.length === 0) {
      alert("No hay productos en el carrito");
      return;
    }

    generarOrden();
  };

  if (orderId) {
    return (
      <div className="container text-white m-5">
        <h1>Orden generada con éxito</h1>
        <p>
          Tu orden ha sido generada con el número de orden <b>{orderId}</b>
        </p>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }
  return (
    <div className="container text-white m-5">
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={values.name}
          onChange={handleInputChange}
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          className="form-control mb-2"
          type="tel"
          placeholder="Numero de telefono"
          value={values.tel}
          onChange={handleInputChange}
          name="tel"
        />
        <button className="btn btn-primary" type="submit">
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  );
};
