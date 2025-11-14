import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-5 fw-bold text-primary">Entre em Contato</h2>
          <p className="lead text-muted">Estamos prontos para tirar suas dúvidas sobre o aplicativo BHC.</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* Coluna Centralizada com Informações de Contato */}
        <Col md={6}> {/* Diminuímos o tamanho para 6 colunas para centralizar */}
          <Card className="shadow-lg h-100 p-4">
            <Card.Body>
              <h4 className="mb-4 text-primary text-center">Nossos Canais</h4>
              
              <p className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope fs-5 me-3 text-secondary">📧</i> 
                <strong>Email de Suporte:</strong> suporte@bariatricare.com
              </p>
              
              <p className="d-flex align-items-center mb-3">
                <i className="bi bi-phone fs-5 me-3 text-secondary">📞</i>
                <strong>Telefone:</strong> (11) 99999-9999
              </p>

              <p className="d-flex align-items-start">
                <i className="bi bi-geo-alt fs-5 me-3 text-secondary">📍</i>
                <span>
                  <strong>Endereço Sede:</strong><br />
                  Rua da Saúde, 123 - Centro<br />
                  São Paulo - SP
                </span>
              </p>
              
              <hr />
              <p className="text-center text-muted small">
                  Atendimento de Segunda a Sexta, das 9h às 18h.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        {/* A coluna do formulário (Col md={7}) foi removida */}
      </Row>
    </Container>
  );
}

export default Contact;