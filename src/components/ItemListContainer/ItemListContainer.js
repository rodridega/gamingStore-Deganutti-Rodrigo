import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);


  const { caterogyId } = useParams();
  useEffect(() => {
    setLoading(true);

    // armo referencia
    const juegosRef = collection(db, 'juegos')
    const q = caterogyId ? query(juegosRef, where('categoria', '==', caterogyId)) : juegosRef
    // pedir referencia
    getDocs(q)
    .then((resp) =>{
      setGames(resp.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      } ))
    } )
    .finally(() =>{
      setLoading(false)
    } )
    
  }, [caterogyId]);

  return (
    <Container fluid>
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
