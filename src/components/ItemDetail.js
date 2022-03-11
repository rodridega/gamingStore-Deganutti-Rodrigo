import React from "react";

export const ItemDetail = ({ game }) => {

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{game.name} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={game.image} alt={game.name} />
        <p>{game.description} </p>
        <span>{game.price}</span>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
