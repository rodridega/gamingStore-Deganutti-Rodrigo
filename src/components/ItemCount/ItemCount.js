import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);
  const [stockTotal, setStockTotal] = useState(stock);

  const onMinus = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
      setStockTotal(stockTotal + 1);
    }
  };
  const onAdd = () => {
    if (stockTotal <= 1) {
      return;
    } else {
      setCounter(counter + 1);
      setStockTotal(stockTotal - 1);
    }
  };

  return (
    <>
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
      <Row>
        <Button variant="dark" size={"md"}>
          Agregar al carrito
        </Button>
      </Row>
    </>
  );
};
