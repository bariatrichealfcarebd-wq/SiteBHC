import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Você pode usar ícones, se estiver usando uma biblioteca como react-icons
// Ex: import { FaHeartbeat, FaCalendarCheck, FaClipboardList } from 'react-icons/fa';

const benefits = [
  {
    icon: '❤️', // Ícone representativo
    title: 'Monitoramento de Saúde Personalizado',
    text: 'Acompanhe suas Vitaminas, Minerais e Hidratação com lembretes personalizados para garantir que você esteja sempre no caminho certo para sua recuperação.',
  },
  {
    icon: '🗓️', // Ícone representativo
    title: 'Agenda de Consultas e Lembretes',
    text: 'Nunca perca uma consulta importante! O app oferece lembretes programados para medicamentos, suplementos e exames de rotina.',
  },
  {
    icon: '🍏', // Ícone representativo
    title: 'Guias Nutricionais e Receitas',
    text: 'Acesso a orientações dietéticas aprovadas e receitas adaptadas para cada fase da sua recuperação, garantindo nutrição e sabor.',
  },
];

function AppBenefits() {
  return (
    <Container className="text-center my-5">
      <h2 className="mb-4">Por Que Escolher o Bariatric Health Care?</h2>
      <p className="lead mb-5 text-muted">As três maiores vantagens que transformam o seu acompanhamento.</p>

      <Row>
        {benefits.map((benefit, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0 pt-3">
              <div className="fs-1 mb-3 text-primary">{benefit.icon}</div> 
              <Card.Body>
                <Card.Title className="fw-bold">{benefit.title}</Card.Title>
                <Card.Text>{benefit.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AppBenefits;