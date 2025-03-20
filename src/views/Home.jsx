// src/views/Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarrosselImagens from '../components/CarrosselImagens';
import InstituicoesCard from '../components/InstituicoesCards'; 

const Home = () => {
  return (
    <Container>
      {/* Carrossel de Imagens */}
      <Row className="mb-4">
        <Col>
          <CarrosselImagens />
        </Col>
      </Row>

      {/* Cards das Instituições */}
      <Row>
        <Col>
          <InstituicoesCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;