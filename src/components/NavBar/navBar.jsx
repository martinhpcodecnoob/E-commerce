import React, {useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import logtienda from "../../img/logtienda.png"

import Search from "../../views/search";


const Navbar = () => {

  const context = useUserContext();

  
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">
          <img src={logtienda} alt="logo-tienda" width={"80%"} />
        </div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            {/* <li>
              <Container>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Container>
            </li> */}

            <li>
              <Link to="/">Home</Link>
            </li>
            {context.usuarioActual ? (
              <>
                <li>
                  <Link to="/profile">
                    Bienvenido {context.usuarioActual.user.first_name}
                  </Link>
                </li>
                <li>
                  <Link to="/item">Buscar Productos</Link>
                </li>
                <li>
                  <Link to="/carrito">Carrito</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;