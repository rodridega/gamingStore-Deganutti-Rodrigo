import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Container, Spinner } from "react-bootstrap";
import { getJuegos } from "../../helpers/getJuegos";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const { caterogyId } = useParams();
  useEffect(() => {
    setLoading(true);
    getJuegos()
      .then((res) => {
        if (!caterogyId) {
          setGames(res);
        } else {
          setGames(res.filter((game) => game.categoria === caterogyId));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [caterogyId]);

  return (
    <Container>
      <h2 className="fs-1 m-4 text-center text-white">
        {caterogyId === undefined ? greeting : caterogyId}
      </h2>

      {loading ? (
        <Spinner
          animation="grow"
          variant="light"
          className="d-flex mx-auto my-5"
        />
      ) : (
        <ItemList games={games} />
      )}
    </Container>
  );
};

export default ItemListContainer;
