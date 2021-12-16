import React from "react";
import {Figure,FigureImage,Button,Row,Container,Col} from 'react-bootstrap';

export default function Home() {
  return (
    <div>
  <Container className="container-home">
  <Row>
  <Col  md="auto">
      <h2>Compra online</h2>
      <h3 >Los mejores productos a los mejores precios </h3>
      <p>Encuentra accesorios, ropas, articulos para el hogar, tecnologia, etc.</p>
      <Button variant="primary"  active>
    Ver productos
  </Button>
  </Col>
  <Col  md="auto">
      <Figure>
  <Figure.Image
    width={400}
    height={400}
    alt="400x400"
    src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Shopping-PNG-HD-Quality.png"
  />
</Figure>
</Col>
</Row>
</Container>   
    </div>
  );
}
