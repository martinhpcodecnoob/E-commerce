import React, { useState } from 'react'
import axios from "axios";

import {Button, Container,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Search =({id})=> {
    const [valor, setValor] = useState('')
    

    const changeInput = e => setValor(e.target.value);

    const buscandoAndo= () => {
        axios
            .get("https://ecomerce-master.herokuapp.com/api/v1/item/")
            .then((response) => {
              if (response.status === 200) {
                  
                  response.data.map((items,i)=>{
                        if (items.product_name.toString()==valor) {
                            id(items._id.toString())
                            return;
                        }
                  })

                  
              }
            });
      }

    return (
        <li>
              <Container>
                <Form className="d-flex">
                  <FormControl
                    onChange={changeInput}
                    value={valor}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  
                  <Button onClick={buscandoAndo} value={valor} variant="outline-dark">Search</Button>
                </Form>
              </Container>
            </li>
    )
}

export default Search;
