import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import { useUserContext } from "../context/userContext";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Login() {
  const history = useHistory();
  const context = useUserContext();
  const login = (datos) => {
    axios
      .post("https://ecomerce-master.herokuapp.com/api/v1/login", datos)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);

        const config = {
          headers: {
            Authorization: `JWT ${response.data.token}`,
          },
        };

        axios
          .get("https://ecomerce-master.herokuapp.com/api/v1/user/me", config)
          .then((response) => {
            if (response.status === 200) {
              context.setUsuarioActual(response.data);
            }
          });
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { inputs, handleInput, handleSubmit } = useForm(login, {});

  console.log("Esto es la funcion login ", login);

  return (
    <Container>
      <div className="container-login">
        <h1 className="login">Inicia Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Row>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="text"
                name="email"
                placeholder="Ingresa tu email"
                onChange={handleInput}
                value={inputs.email}
              />
            </Row>
          </div>
          <div>
            <Row>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                onChange={handleInput}
                value={inputs.password}
              />
            </Row>
          </div>
          <Button
            className="btn-log"
            variant="outline-primary"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}