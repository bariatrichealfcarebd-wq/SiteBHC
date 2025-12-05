// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// 💡 Lembre de importar 'Image' para usar o componente:
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap'; 


import HomePage from './pages/HomePage';
import AppPage from './pages/AppPage';
import Footer from './components/Footer';


// 🚀 CAMINHO ARRUMADO: Usando o caminho absoluto a partir de src/
// (Isso funciona melhor e evita problemas de referência relativa)
import bhcLogo from '/src/assets/logoBariatric2000x2000.png'; 
// ⚠️ ATENÇÃO: Verifique se o nome do arquivo "logo-bhc.png" e a extensão estão corretos!

function App() {
  return (
    <Router>
      {/* 💡 Usando bg="dark" (sua cor #294134) e variant="dark" (links brancos) */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top"> 
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            {/* Logo do BHC */}
            <Image src={bhcLogo} height="40" className="d-inline-block align-top me-2" alt="Logo BHC" /> 
          </Navbar.Brand>
          
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* 💡 Remover justify-content-center e simplificar o layout */}
          <Navbar.Collapse id="basic-navbar-nav">
            
            {/* 💡 ÚNICA TAG NAV PARA TODOS OS ITENS (Mobile se alinha automaticamente) */}
            <Nav className="ms-auto align-items-lg-center"> 
              
              {/* Links centrais (mas no desktop eles ficam à direita devido ao ms-auto) */}
              <Nav.Link as={Link} to="/" className="fw-bold me-lg-3">Início</Nav.Link>
              <Nav.Link href="#sobre" className="me-lg-3">Sobre Nós</Nav.Link> 
              <Nav.Link href="#contato" className="me-lg-5">Contato</Nav.Link> {/* Mais espaço antes do botão */}
              
              {/* Botão de CTA, SEM classes de alinhamento automático complexas */}
              <Nav.Link as={Link} to="/app" className="my-2 my-lg-0"> 
                <Button variant="outline-light" size="sm" className="py-1 px-3" style={{ 
                  borderColor: '#75EBAC', 
                  color: '#75EBAC'      
                }}>
                  Acesse o App
                </Button>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;