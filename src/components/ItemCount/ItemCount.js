import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Row className="align-items-center justify-content-center">
        <Col xs="auto">
          <Button
            className="mb-2 px-3 py-1"
            variant="dark"
            onClick={() => {
              counter <= 1 ? setCounter(counter) : setCounter(counter - 1)
            }}
          >
            -
          </Button>
        </Col>
        <Col xs="auto">
          {" "}
          <div className="border rounded mb-2 px-3 py-1 fs-4">{counter}</div>
        </Col>
        <Col xs="auto">
          {" "}
          <Button
            className="mb-2 px-3 py-1"
            variant="dark"
            onClick={() => {
              counter === stock ? setCounter(counter) : setCounter(counter + 1)
            }}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Button variant="dark" size={"md"} onClick={onAdd}>
          Agregar al carrito
        </Button>
      </Row>
    </>
  );
};
