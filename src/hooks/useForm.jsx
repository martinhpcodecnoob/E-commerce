import { useState } from "react";

export default function useForm(callback, datos) {
  const [inputs, setInputs] = useState(datos); 
  console.log(inputs);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    callback(inputs);
    
  };

  return {
    inputs,
    handleInput,
    handleSubmit,
  };
}