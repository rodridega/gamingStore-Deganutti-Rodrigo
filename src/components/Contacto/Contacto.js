import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export const Contacto = () => {
  return (
    <Container>
      <Form className="text-white mt-5">
        <h2>Contacto</h2>
        <p>Quieres algun juego que no esta en la lista?</p>
        <p>Tienes alguna sugerencia para mejorar la web?</p>
        <p>Deja aqui tu comentario!</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deja tu comentario</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="dark">Enviar</Button>
      </Form>
    </Container>
  );
};
