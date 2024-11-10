import React from "react";
import { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();

  function update(){

    fetch(' http://localhost:6001/plants', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    
      setName()
      setImage()
      setPrice()
  
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={update}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="url" name="image" placeholder="Image URL" value={image}  onChange={(e)=>setImage(e.target.value)} required/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price}  onChange={(e)=>setPrice(e.target.value)} required/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
