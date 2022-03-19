import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "./Nosotros.css";

export const Nosotros = () => {
  return (
    <Container>
      <div className="border rounded mt-5">
        <p className="fs-5 text-white text-center p-5 m-0 bg-dark">
          Somos una empresa que se dedica a lo que ama! Jugar videojuegos! pero
          tambien los vendemos, asique no dejes de recorer nuestra web buscando
          los mejores precios en los mejores juegos del ultimo año.
        </p>
      </div>

      <hr className="text-white" />
      <h2 className="my-5 text-white text-center">Preguntas frecuentes</h2>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Puedo Comprar los juegos con tarjeta de credito o debito?
          </Accordion.Header>
          <Accordion.Body>
            Sin dudas, podes pagarlo de esa manera o con transferencia bancaria,
            nuestro Alias es: Gaming.Vicente.2022
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Si un juego no me funciona, puedo devolverlo?
          </Accordion.Header>
          <Accordion.Body>
            No son posibles las devoluciones, por lo que te recomendamos que
            antes de comprar, chequees los requerimientos minimos para saber si
            tu PC esta apta
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
