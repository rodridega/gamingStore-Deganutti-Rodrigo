import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ItemDetail } from "../ItemDetail";
import "./Item.css";

export const Item = ({ game, handleShow }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(5);


  const onMinus = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
      setStock(stock + 1);
    }
  };
  const onAdd = () => {
    if (stock <= 0) {
      return;
    } else {
      setCounter(counter + 1);
      setStock(stock - 1);
    }
  };

  return (
    <Col>
      <Card
        className="mx-auto mb-3"
        style={{ width: "18rem", height: "30rem" }}
      >
        <div className="imagen">
          <Card.Img
            onClick={handleShow}
            variant="top"
            src={game.img}
            className="bg-secondary h-100 overflow-hidden"
          />
        </div>
        <Card.Body className="text-white bg-secondary border-none d-flex flex-column justify-content-between">
          <Card.Title> {game.nombre}</Card.Title>
          <Card.Text className="">{game.descripcion}</Card.Text>
          <Card.Text>Stock: {game.stock}</Card.Text>
          <Row className="align-items-center justify-content-center ">
            <Col xs="auto">
              <Button
                className="mb-2 px-3 py-1"
                variant="dark"
                onClick={onMinus}
              >
                -
              </Button>
            </Col>
            <Col xs="auto">
              {" "}
              <div className="border rounded mb-2 px-3 py-1 fs-4">
                {counter}
              </div>
            </Col>
            <Col xs="auto">
              {" "}
              <Button className="mb-2 px-3 py-1" variant="dark" onClick={onAdd}>
                +
              </Button>
            </Col>
          </Row>
          <div className="d-grid gap-2">
            <Button variant="dark" size={"md"}>
              Agregar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>

  );
};
