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
import bhcLogo from '/src/assets/logo-bhc.png'; 
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

          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
            
            {/* 💡 ÚNICA TAG NAV PARA TODOS OS ITENS */}
            <Nav className="w-100 justify-content-center"> 
              
              {/* Links centrais */}
              <Nav.Link as={Link} to="/" className="fw-bold mx-3">Início</Nav.Link>
              <Nav.Link href="#sobre" className="mx-3">Sobre Nós</Nav.Link> 
              <Nav.Link href="#contato" className="mx-3">Contato</Nav.Link> 
              
             
              <Nav.Link as={Link} to="/app" className="ms-auto order-lg-3"> {/* ms-auto e order-lg-3 forçam para o canto */}
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