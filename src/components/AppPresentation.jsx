// src/components/AppPresentation.jsx

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
// ⚠️ Caminho ajustado para '../AppPresentation.module.css'
import styles from '../AppPresentation.module.css'; 

function AppPresentation({ flutterFlowUrl }) {
  const [hoveringIframe, setHoveringIframe] = useState(false);

  useEffect(() => {
    // Quando o mouse estiver sobre o iframe, prevenir o scroll do documento pai
    // Salvamos o valor anterior e restauramos ao sair / desmontar
    const previousOverflow = document.body.style.overflow;
    if (hoveringIframe) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow || '';
    }

    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, [hoveringIframe]);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-2">Acesse a Versão Web do App BHC</h2>
      <p className="lead text-center text-muted mb-5">Use o aplicativo em qualquer dispositivo, diretamente no seu navegador.</p>
      <div className="text-center mb-5">
        <a
          className="lead text-muted"
          href="https://bariatric-health-care.flutterflow.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Em casos de dificuldades, acesse diretamente a versão web aqui
        </a>
      </div>     
      {/* O div "shadow-lg" original foi substituído pela moldura do celular */}
     
      {/* A CLASSE DO MÓDULO CSS É APLICADA AQUI (MOLDURA) */}
      <section>
      <div className={styles.phoneFrame}>
        <iframe
          src={flutterFlowUrl}
          title="Bariatric Health Care App Web"
          className={styles.iframe}
          scrolling="yes"
          onMouseEnter={() => setHoveringIframe(true)}
          onMouseLeave={() => setHoveringIframe(false)}
          onFocus={() => setHoveringIframe(true)}
          onBlur={() => setHoveringIframe(false)}
        >
          Seu navegador não suporta iframes.
        </iframe>
      </div>
      </section>
    </Container>
  );
}

export default AppPresentation;