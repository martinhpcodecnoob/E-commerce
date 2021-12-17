import React, {useEffect, useState}  from "react";
import Search from "./search";
import axios from "axios";
import ItemImageCards from "./ItemImageCards";

import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup, Container} from 'react-bootstrap';
import withProtection from "../utils/withProtection";

const Carrito=() => {

  const [select, setSelect] = useState()
  const [ids, setIds] = useState("")
  const id=(obtenId)=> setIds(obtenId)
  console.log("este es id desde item ",ids);

  useEffect(() => {
    axios
            .get(`https://ecomerce-master.herokuapp.com/api/v1/item/${ids}`)
            .then((response) => {
              if (response.status === 200) {
                  console.log("Este es desde axios",response.data);
                  
              }
            });
  }, [id])
  return (
    <>
      <h1>Carrito</h1>
      <Search id={id}/>
      <Container>
        <CardGroup>
          {console.log()}
        </CardGroup>
      </Container>
    </>
  );
}

export default withProtection(Carrito)