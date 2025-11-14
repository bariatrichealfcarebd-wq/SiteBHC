import React from 'react';
import { Container } from 'react-bootstrap';
// Importe o componente que criamos para hospedar o iframe
import AppPresentation from '../components/AppPresentation'; 

// ⚠️ MANTENHA O ROTEAMENTO LIMPO: 
// Defina a URL do FlutterFlow em uma constante para fácil alteração
const FLUTTERFLOW_URL = "SUA_URL_DO_FLUTTERFLOW_AQUI"; 
// Lembre-se de substituir o placeholder acima pela URL real do seu site!

function AppPage() {
  return (
    <Container fluid className="p-0">
      {/* Usamos "fluid" e "p-0" (padding 0) para que o container 
        não adicione margens laterais, permitindo que o iframe preencha 
        melhor a tela, dando mais espaço para o app web.
      */}
      
      <AppPresentation flutterFlowUrl={"https://bariatric-health-care-6d8.flutterflow.app"} />
      
    </Container>
  );
}

// ⚠️ ESSENCIAL: Garante que o App.jsx possa importar este componente
export default AppPage;