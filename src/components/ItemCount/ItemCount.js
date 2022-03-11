import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./ItemCount.css";

export const ItemCount = () => {
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
    <Card className="mx-auto" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://media.vandal.net/m/79072/world-of-warcraft-shadowlands-20209291145071_1.jpg"
      />
      <Card.Body className="text-white bg-secondary border-none">
        <Card.Title> World of Warcraft</Card.Title>
        <Card.Text>
          WoW Shadowlands - Enfrentate al mas allá... El velo entre la vida y la
          muerte ya no existe. WoW Shadowlands
        </Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Button className="mb-2 px-3 py-1" variant="dark" onClick={onMinus}>
              -
            </Button>
          </Col>
          <Col xs="auto">
            {" "}
            <div className="border rounded mb-2 px-3 py-1 fs-4">{counter}</div>
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
  );
};
