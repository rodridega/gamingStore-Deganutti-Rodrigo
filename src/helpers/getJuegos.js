import { juegos } from "../datos/juegos";

export const getJuegos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(juegos);
    }, 1500);
  });
};
