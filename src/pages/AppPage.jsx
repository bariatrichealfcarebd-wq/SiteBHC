import React from 'react';
import AppPresentation from '../components/AppPresentation'; 
import ReducedNavbar from '../components/ReducedNavbar'; // Importe a nova navbar

const FLUTTERFLOW_URL = "https://bariatric-health-care.flutterflow.app"; 

function AppPage() {
  return (
    // Container flex que ocupa a altura toda e organiza os itens em coluna
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ReducedNavbar />
      <AppPresentation flutterFlowUrl={FLUTTERFLOW_URL} />
    </div>
  );
}

export default AppPage;