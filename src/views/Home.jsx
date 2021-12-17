import React from "react";
import {Figure,FigureImage,Button,Row,Container,Col} from 'react-bootstrap';

export default function Home() {
  return (
    <div>
  <Container className="container-home">
    <Container className="container-left">
    <Row>
    <Col md="auto">
        <h2>Compra online</h2>
        <h3 >Los mejores productos a los mejores precios </h3>
        <p>Encuentra accesorios, ropas, articulos para el hogar, tecnologia, etc.</p>
        <Button variant="primary"  active>
      Ver productos
    </Button>
    </Col>
    </Row>
    </Container>
    <Container className="container-right">
      <Col md="auto">
          <Figure>
      <Figure.Image
        width={450}
        height={450}
        alt="450x450"
        src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Shopping-PNG-HD-Quality.png"
      />
    </Figure>
    </Col>
    </Container>
</Container>   
    </div>
  );
}
