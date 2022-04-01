import React from "react";
import { Row } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ games }) => {
  return (
    <Row className="g-4 mx-auto" md={1} lg={2} xl={3} xxl={4}>
      {games.map((game) => {
        return <Item game={game} key={game.id} />;
      })}
    </Row>
  );
};
