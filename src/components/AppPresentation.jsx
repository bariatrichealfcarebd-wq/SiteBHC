// src/components/AppPresentation.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
// ⚠️ Caminho ajustado para '../AppPresentation.module.css'
import styles from '../AppPresentation.module.css'; 

function AppPresentation({ flutterFlowUrl }) {

  
  return (
    <Container className="my-5">
      <h2 className="text-center mb-2">Acesse a Versão Web do App BHC</h2>
      <p className="lead text-center text-muted mb-5">Use o aplicativo em qualquer dispositivo, diretamente no seu navegador.</p>
      
      {/* O div "shadow-lg" original foi substituído pela moldura do celular */}
      {/* A CLASSE DO MÓDULO CSS É APLICADA AQUI (MOLDURA) */}
      <div className={styles.phoneFrame}>
        <iframe
          src={flutterFlowUrl}
          title="Bariatric Health Care App Web"
          // A CLASSE DO MÓDULO CSS É APLICADA AQUI (IFRAME)
          className={styles.iframe} 
          scrolling="yes" 
        >
          Seu navegador não suporta iframes.
        </iframe>
      </div>
    </Container>
  );
}

export default AppPresentation;