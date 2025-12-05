import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    // Usa a sua cor mais escura (#294134) definida como .bg-primary
    <footer className="bg-primary text-white pt-5 pb-3"> 
      <Container>
        <Row>
          {/* Coluna 1: Logo e Direitos Autorais */}
          <Col md={4} className="mb-4">
            <h5 className="text-white">Bariatric Health Care</h5>
            <p className="small text-white opacity-75">Acompanhamento e suporte digital para sua jornada.</p>
            <p className="small mt-4 mb-0">
              &copy; {new Date().getFullYear()} Bariatric Health Care. Todos os direitos reservados.
            </p>
          </Col>

          {/* Coluna 2: Links de Navegação */}
          <Col md={4} className="mb-4">
            <h5 className="text-white">Navegação</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white opacity-75">Início</Nav.Link>
              <Nav.Link href="/#sobre" className="text-white opacity-75">Sobre Nós</Nav.Link>
              <Nav.Link href="/#contato" className="text-white opacity-75">Contato</Nav.Link>
              <Nav.Link as={Link} to="/app" className="text-white opacity-75">Acesse o App</Nav.Link>
            </Nav>
          </Col>

          {/* Coluna 3: Contato Rápido */}
          <Col md={4} className="mb-4">
            <h5 className="text-white">Fale Conosco</h5>
            <p className="small text-white opacity-75 mb-1">Email: bariatrichealfcarebd@gmail.com</p>
            <p className="small text-white opacity-75">Telefone: (11) 99876-5432</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;