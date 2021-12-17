import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../views/Home";
import Signup from "../views/Signup";
import Login from "../views/Login";
import Item from "../views/Item";
import Navbar from "../components/NavBar";
import Profile from "../views/Profile";
import Carrito from "../views/Carrito"
import { useUserContext } from "../context/userContext";
const Logout = () => {
  window.localStorage.removeItem("token");
  const context = useUserContext();
  context.setUsuarioActual();
  return <Redirect to="/" />;
};

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/item" component={Item} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/carrito" component={Carrito} />
      </Switch>
    </Router>
  );
}