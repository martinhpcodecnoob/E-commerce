import React from 'react'
import {Button, Card, Container, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.nombreProducto}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Marca: {props.marca}</h4>
          <p>
            {props.descripcion}
            <Card.Img variant="top" src={props.imagenes} />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function ItemImageCards({imagenes,nombreProducto,precio,categoria,descripcion, marca}) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagenes} />
                        <Card.Body>
                            <Card.Title>{nombreProducto}</Card.Title>
                            <Card.Text>
                                <div>Precio: {precio} $</div>
                                <div>Categoria: {categoria}</div>
                            </Card.Text>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                            Mas Informacion
                            </Button>
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            nombreProducto={nombreProducto}
                            descripcion={descripcion}
                            marca={marca}
                            imagenes={imagenes}
                            />
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}
