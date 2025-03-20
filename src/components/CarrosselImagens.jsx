// src/components/CarrosselImagens.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarrosselImagens.css';

const CarrosselImagens = () => {
  return (
    <Carousel className="custom-carousel">
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVzY29sYXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Escola com Crianças Brincando"
        />
        <Carousel.Caption>
          <h3>Escola com Crianças Brincando</h3>
          <p>Educação infantil e fundamental em um ambiente acolhedor.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVzY29sYXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Sala de Aula Moderna"
        />
        <Carousel.Caption>
          <h3>Sala de Aula Moderna</h3>
          <p>Ambiente equipado com tecnologia para o aprendizado.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXNjb2xhfGVufDB8fDB8fHww"
          alt="Escola Rural"
        />
        <Carousel.Caption>
          <h3>Escola Rural</h3>
          <p>Educação no campo, promovendo sustentabilidade.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrosselImagens;