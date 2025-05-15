import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navigation.css";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const handleNavLinkClick = () => {
    setExpanded(false);
    
  };
  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbar mb-5"
      expanded={expanded}
      ref={navRef}
    >
      <Container className="container-fluid">
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          TORETO GYM
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/clases" onClick={handleNavLinkClick}>
              Clases
            </Nav.Link>
            <Nav.Link as={Link} to="/entrenadores" onClick={handleNavLinkClick}>
              Entrenadores
            </Nav.Link>
            <Nav.Link as={Link} to="/horarios" onClick={handleNavLinkClick}>
              Horarios
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" onClick={handleNavLinkClick}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}