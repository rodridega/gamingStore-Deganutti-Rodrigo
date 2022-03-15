import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const ItemDetail = ({ game }) => {
  const { name, price, image, description } = game;
  console.log(game);
  return (
    <Container className="border rounded">
      <Row className="text-white">
        <Col>
          <img src={image} alt={name} />
        </Col>
        <Col>
          <h2>{name}</h2>
          <p>{description} </p>
          <hr />
          <p> {price} $</p>
        </Col>
      </Row>
    </Container>
  );
};
