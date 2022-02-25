import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import bneticon from "../images/bneticon.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="xxxl">
      <Container className="align-items-baseline">
        <div className="justify-content-start">
          <Navbar.Brand href="#home">
            <a href="#">
              <img src={bneticon} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#">Estrategia</Nav.Link>
              <Nav.Link href="#">Shooter</Nav.Link>
              <Nav.Link href="#">Rol/RPG</Nav.Link>
              <Nav.Link href="#">Deportes</Nav.Link>
              <Nav.Link href="#">Aventura/Accion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="d-flex">
          <NavDropdown title="Sobre nosotros" id="basic-nav-dropdown">
            <NavDropdown.Item> Contacto </NavDropdown.Item>
            <NavDropdown.Item> Trabaja con nosotros </NavDropdown.Item>
            <NavDropdown.Item> Soporte </NavDropdown.Item>
          </NavDropdown>
          <Button className="mx-2" variant="dark">
            Acceder
          </Button>
          <Button variant="dark">Crear Cuenta</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
