import React, { useEffect, useState } from "react";
import "../../datos/juegos";
import { getJuegos } from "../../helpers/getJuegos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  const { gameId } = useParams();

  useEffect(() => {
    setLoading(true);
    getJuegos()
      .then((res) => {
        setGame(res.find((juego) => juego.id === Number(gameId)));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [gameId]);

  return (
    <>
      {loading ? (
        <Spinner
          animation="grow"
          variant="light"
          className="d-flex mx-auto my-5"
        />
      ) : (
        <ItemDetail {...game} />
      )}
    </>
  );
};
