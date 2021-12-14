import React from 'react'
import {Button, Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemImageCards({imagenes,nombreProducto,precio,categoria,descripcion}) {
    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagenes} />
                        <Card.Body>
                            <Card.Title>{nombreProducto}</Card.Title>
                            <Card.Text>
                                {descripcion}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
