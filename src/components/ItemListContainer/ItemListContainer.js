import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList";
import "./ItemListContainer.css";
import { juegos } from "../../datos/juegos";
import {Container} from 'react-bootstrap'

const ItemListContainer = ({ greeting }) => {
  const [games, setGames] = useState([]);

  const getJuegos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(juegos);
    }, 2000);
  });

  useEffect(() => {
    getJuegos
      .then((res) => setGames(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("Fin del proceso"));
  }, []);

  return (
    
      <Container>
        <h2 className="fs-1 m-4 text-center text-white">{greeting}</h2>
        <ItemList games={games} />
      </Container>
    
  );
};

export default ItemListContainer;
