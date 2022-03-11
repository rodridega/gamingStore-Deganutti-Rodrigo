import React, { useEffect } from "react";
import "../datos/juegos";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [game, setGame] = useState("");
  const juego = {
    name: "Lost Ark",
    price: 0,
    id: 1,
    description: "RPG de accion",
    image:
      "https://media.tycsports.com/files/2022/02/08/387876/lost-ark-fecha-de-lanzamiento-ediciones-y-precios_416x234.jpg",
  };

  const getJuego = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(juego);
      reject("Error al cargar los productos");
    }, 2000);
  });

  useEffect(() => {
    getJuego
      .then((res) => setGame(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("Fin del proceso"));
  }, []);
  
  return <ItemDetail game={game} />;
};
