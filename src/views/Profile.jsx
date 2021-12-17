import React from "react";
import withProtection from "../utils/withProtection";
import { useUserContext } from "../context/userContext";

import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const context = useUserContext();
  console.log(context);
  return (
    <Container className="container-info">
      <div className="row list-group-info">
        <div className="">
          <Row className="pd-logo">
            <Col xs={6} md={4}>
              <Image src="personal-data.png" false rounded />
            </Col>
            <Col>
              <h1 className="my-auto-perfil">Mi perfil</h1>
            </Col>
          </Row>
          {context.usuarioActual ? (
            <>
              <ListGroup
                variant="flush"
                className="list-group list-group-accent"
              >
                <ListGroup.Item className="list-group-item list-group-item-accent-light">
                  Nombre: {context.usuarioActual.user.first_name}
                </ListGroup.Item>
                <ListGroup.Item>
                  Apellido: {context.usuarioActual.user.last_name}
                </ListGroup.Item>
                <ListGroup.Item>
                  Fecha de nacimiento: {context.usuarioActual.user.birth_date}
                </ListGroup.Item>
                <ListGroup.Item>
                  Correo electrónico: {context.usuarioActual.user.email}
                </ListGroup.Item>
              </ListGroup>
            </>
          ) : (
            <p>No puedes acceder a esta info</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default withProtection(Profile);