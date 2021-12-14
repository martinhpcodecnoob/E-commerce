import React, { useEffect, useState } from "react";
import withProtection from "../utils/withProtection";

import axios from "axios";
import ItemImageCards from "./ItemImageCards";

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
      {}
      {/* {productos.map((conteo)=>{
        // <ItemImageCards
        // key={i}
        // imagenes={conteo.image}
        // nombreProducto={conteo.product_name}
        // precio={conteo.price}
        // categoria={conteo.category}
        // descripcion={conteo.description}/>
        <h1>{}</h1>
        console.log(conteo.product_name);
      })} */}
      
    </div>
  );
};

export default withProtection(Item);