import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ game }) => {
  const { img, nombre, precio, stock, id } = game;

  return (
    <Col>
      <Card
        className="mx-auto mb-3"
        style={{ width: "20rem", height: "25rem" }}
      >
        <div className="imagen">
          <Card.Img
            variant="top"
            src={img}
            className="bg-dark h-100 overflow-hidden"
          />
        </div>
        <Card.Body className="text-white bg-dark border-none d-flex flex-column justify-content-between">
          <Card.Title> {nombre}</Card.Title>
          <Card.Text>{precio === 0 ? "Gratis" : `$ ${precio}`}</Card.Text>

          <div className="d-grid gap-2">
            <Link to={`/detail/${id}`}>
              <Button variant="light" size={"md"}>
                Ver mas
              </Button>
            </Link>
          </div>
          <hr />
          <Card.Text>
            {stock === 0 ? "Sin Stock" : `Stock disponible: ${stock}`}{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
