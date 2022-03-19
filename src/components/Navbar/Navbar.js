import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidgets from "../CartWidgets/CartWidgets";

import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="xxxl" className="justify-content-end">
      <Container className="align-items-baseline">
        <div className="justify-content-start">
          <Navbar.Brand href="#home">
            <Link to={"/"}>
              {" "}
              <img src="/images/bneticon.png" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/productos/Estrategia">Estrategia</Link>
              <Link to="productos/Shooter">Shooter</Link>
              <Link to="productos/Rol-Rpg">Rol/RPG</Link>
              <Link to="productos/MMORPG">MMORPG</Link>
              <Link to="productos/MOBA">MOBA</Link>
              <Link to="productos/Trading Card Game">Trading Card Game</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="d-flex">
          <NavDropdown title="Sobre nosotros" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to={"/nosotros"}>Preguntas Frecuentes </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={"/contacto"}>Contacto</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Button className="mx-2 btn-sm" variant="dark">
            Acceder
          </Button>
          <Button variant="dark" className="btn-sm">
            Crear Cuenta
          </Button>
        </div>
      </Container>
      <CartWidgets />
    </Navbar>
  );
};

export default NavBar;