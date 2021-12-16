import React from "react";
import withProtection from "../utils/withProtection";
import { useUserContext } from "../context/userContext";
import {ListGroup,ListGroupItem,Stack} from 'react-bootstrap';
const Profile = () => {
  const context = useUserContext();
  console.log(context);
  return (
    <div>
      <h1 class="text-center">Mi perfil</h1>
      {context.usuarioActual ? (
        <>
        <Stack gap={4} className="col-md-5 mx-auto">
        <ListGroup>
          <ListGroup.Item variant="info">Nombre: {context.usuarioActual.user.first_name}</ListGroup.Item>
          <ListGroup.Item variant="info">Apellido: {context.usuarioActual.user.last_name}</ListGroup.Item>
          <ListGroup.Item variant="info">Fecha: {context.usuarioActual.user.birth_date}</ListGroup.Item>
          <ListGroup.Item variant="info">Correo: {context.usuarioActual.user.email}</ListGroup.Item>
        </ListGroup>
        </Stack>
        </>
      ) : (
        <p>No puedes acceder a esta info</p>
      )}
    </div>
  );
};

export default withProtection(Profile);