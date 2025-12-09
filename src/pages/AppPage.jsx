import React from 'react';
import AppPresentation from '../components/AppPresentation'; 
import ReducedNavbar from '../components/ReducedNavbar'; // Importe a nova navbar

const FLUTTERFLOW_URL = "https://bariatric-health-care.flutterflow.app"; 

function AppPage() {
  return (
    // Container que ocupa a altura toda
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar oculta no mobile, visível apenas no desktop (lg+) */}
      <div className="d-none d-lg-block">
        <ReducedNavbar />
      </div>
      
      {/* App ocupa tela inteira no mobile */}
      <AppPresentation flutterFlowUrl={FLUTTERFLOW_URL} />
    </div>
  );
}

export default AppPage;