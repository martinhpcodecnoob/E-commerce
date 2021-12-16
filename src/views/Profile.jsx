import React from "react";
import withProtection from "../utils/withProtection";
import { useUserContext } from "../context/userContext";

import { Container, Card, ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const context = useUserContext();
  console.log(context);
  return (
    <div className="container">
      <h1 style={{ color: "purple" }}>Mi perfil</h1>
      <p>
        !Hola, {context.usuarioActual.user.first_name} ! Aquí puedes ver la
        información de tu cuenta.{" "}
      </p>
      {context.usuarioActual ? (
        <>
          <p>Nombre: {context.usuarioActual.user.first_name}</p>
          <p>Apellido: {context.usuarioActual.user.last_name}</p>
          <p>Fecha de nacimiento: {context.usuarioActual.user.birth_date}</p>
          <p>Correo electrónico: {context.usuarioActual.user.email}</p>
        </>
      ) : (
        <p>No puedes acceder a esta info</p>
      )}
    </div>
  );
};
export default withProtection(Profile);
