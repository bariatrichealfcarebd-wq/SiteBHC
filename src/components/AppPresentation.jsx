// src/components/AppPresentation.jsx

import React, { useState, useEffect } from 'react';
import styles from '../AppPresentation.module.css'; 

function AppPresentation({ flutterFlowUrl }) {
  const [hoveringIframe, setHoveringIframe] = useState(false);

  useEffect(() => {
    // Guarda os valores originais para restaurar depois.
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (hoveringIframe) {
      // Calcula a largura da barra de rolagem para evitar o "pulo" da tela.
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    // Função de limpeza para restaurar os estilos ao desmontar o componente.
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [hoveringIframe]);

  return (
    <section className={styles.phoneFrame}>
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
    </section>
  );
}

export default AppPresentation;