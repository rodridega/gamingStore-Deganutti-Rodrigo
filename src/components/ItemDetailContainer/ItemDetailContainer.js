import React, { useEffect, useState } from "react";
import "../../datos/juegos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  const { gameId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'juegos', gameId);

    getDoc(docRef)
    .then((doc) => {
      setGame({id: doc.id, ...doc.data()});
    })
    .finally(()=>{
      setLoading(false)
    })
    
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
