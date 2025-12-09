import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ReducedNavbar() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: '56px' }}>
      <Container>
        <Nav>
          <Nav.Link as={Link} to="/" className="fw-bold">
            &larr; Voltar para o site
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ReducedNavbar;
