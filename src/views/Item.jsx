import React, { useEffect, useState } from "react";
import withProtection from "../utils/withProtection";

import axios from "axios";
import ItemImageCards from "./ItemImageCards";

import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup, Container,Figure,FigureImage,Button,Row,Col} from 'react-bootstrap';
import Search from "./search";

const Item = () => {

  const [productos, setProductos]=useState([]);

  useEffect(() => {
    axios
        .get("https://ecomerce-master.herokuapp.com/api/v1/item/")
        .then((response) => {
          if (response.status === 200) {
              setProductos(response.data)
          }
        });
  }, [])

  
  return (
    <div>
      <h1>Item</h1>
      <Search/>
      <Container>
        <CardGroup>
          {productos.map((conteo, i)=>{
            return(<ItemImageCards
                    key={i}
                    imagenes={conteo.image}
                    nombreProducto={conteo.product_name}
                    precio={conteo.price}
                    categoria={conteo.category}
                    descripcion={conteo.description}
                    marca={conteo.brand}/>);
                  })}
        </CardGroup>
      </Container>
      
      
    </div>
  );
};

export default withProtection(Item);