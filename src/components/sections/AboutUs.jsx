// src/components/sections/AboutUs.jsx

import React from 'react';
// Importe o que precisar (Container, Row, etc., se for usar)

function AboutUs() {
  return (
    // Conteúdo da seção Sobre Nós/Missão
    <div className="text-center">
      <h2>Sobre Nós & Nossa Missão</h2>
      <p>Desenvolivido com o intuito de facilitar a jornada de saúde bariátrica, oferecendo suporte digital e acompanhamento personalizado na palma da sua mão,
      Bariatric Health Care é dedicado a fornecer ferramentas e recursos que ajudam nossos usuários a alcançar seus objetivos de saúde de forma eficaz e sustentável para pacientes
      bariátricos.</p>
      <p>Nossa missão é empoderar cada indivíduo em sua jornada de saúde, fornecendo um aplicativo intuitivo e abrangente que combina tecnologia de ponta com suporte humano especializado.
      Acreditamos que a saúde bariátrica deve ser acessível, personalizada e contínua, e estamos comprometidos em fazer isso acontecer através do Bariatric Health Care.
      </p>
    </div>
  );
}

// ESTA LINHA É A SOLUÇÃO: use 'export default'
export default AboutUs;