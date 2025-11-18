// src/pages/HomePage.jsx (Código atualizado)
import React from 'react';
import { Container } from 'react-bootstrap';

// Importe os componentes criados
import HomeBanner from '../components/sections/HomeBanner';
import AppBenefits from '../components/sections/AppBenefits'; // NOVO
import AboutUs from '../components/sections/AboutUs';
import Contact from '../components/sections/Contact';

function HomePage() {
  return (
    <>
      <HomeBanner />
      
      {/* NOVO: Seção de Vantagens */}
      <AppBenefits /> 

      {/* Seção âncora: SOBRE NÓS */}
      <div id="sobre"> 
        <Container className="py-5">
          <AboutUs />
        </Container>
      </div>

      {/* Seção âncora: CONTATOS */}
      <div id="contato" className="bg-light"> 
        <Container className="py-5">
          <Contact />
        </Container>
      </div>
    </>
  );
}

export default HomePage;