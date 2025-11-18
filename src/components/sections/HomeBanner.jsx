// src/components/sections/HomeBanner.jsx

import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
// 💡 IMPORTAR SUA IMAGEM DE FUNDO AQUI
import bannerBackground from '../../assets/banner-background.jpg'; // <- Ajuste o caminho e o nome do arquivo!

// Importar o logo do app se quiser na área da imagem do banner
// import appScreenshot from '../../assets/app-screenshot.png'; 

function HomeBanner() {
  const bannerStyle = {
    // Definir a imagem de fundo
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerBackground})`, // Camada escura + imagem
    backgroundSize: 'cover',        // Cobre toda a área
    backgroundPosition: 'center',   // Centraliza a imagem
    color: '#fff',                  // Cor do texto branca
    padding: '8rem 0',              // Espaçamento interno
    marginBottom: '3rem',           // Margem inferior
  };

  return (
    // 💡 APLICAR O ESTILO DIRETAMENTE NA DIV
    <div style={bannerStyle}>
      <Container>
        <Row className="align-items-center">
          
          <Col md={7} className="text-md-start text-center mb-4 mb-md-0">
            <h1 className="display-3 fw-bold">Transforme Sua Jornada Bariátrica</h1> {/* Título mais impactante */}
            <p className="lead">
              Seu guia completo e digital para a jornada de saúde bariátrica.
              Acompanhamento nutricional, diário de progresso e suporte especializado na palma da sua mão.
            </p>
            
            <div className="d-flex flex-column flex-md-row gap-3">
              <Button variant="light" size="lg" href="#sobre">
                Descubra Nossa Missão
              </Button>
             <Button 
                variant="outline-light" 
                size="lg" 
                as={Link} // 💡 CORREÇÃO: Renderiza o Button como um Link
                to="/app" // 💡 CORREÇÃO: Aponta para a rota interna do React
              >
                Acessar o App Web
              </Button>
            </div>
          </Col>
          
          {/* Coluna da Imagem/Screenshot do App */}
          <Col md={5} className="text-center">
            {/* Aqui você pode colocar um screenshot do seu app ou um ícone grande */}
            {/* Exemplo com um placeholder ou screenshot real: */}
            
            {/* Se estiver usando uma imagem real do app:
            <Image src={appScreenshot} fluid rounded className="shadow-lg" />
            */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default HomeBanner;
