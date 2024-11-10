import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Delete from "./Delete";
import Updating from "./Updating";

function PlantCard() {
  const [plants, setPlants]= useState([])
  const [instock, setInstock]= useState(true)

  useEffect(()=>{
    fetch(' https://react-hooks-cc-plantshop-4-54zw.onrender.com/plants')
    .then((response) => response.json())
    .then((data) => setPlants(data))
    .catch((error) => console.error("Error fetching data:", error));
}, [])

  return (
    <>

    {plants && plants.length<1 && <div className="progress">
          <div className="inner"></div>
          <div className="inner"></div>
          <div className="inner"></div>
          <div className="inner"></div>
          <div className="inner"></div>
    </div>}

    {plants.map((plant)=>(
    <li className="card" data-testid="plant-item" key={plant.id}>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {instock === true ? (
        <button className="primary" onClick={()=>setInstock(false)}>In Stock</button>
      ) : (
        <button className="bg-danger" onClick={()=>setInstock(true)}>Out of Stock</button>
      )}
      <Delete plant={plant}/> 
      <Updating plant={plant}/>
    </li>
    ))};
    </>
  );
}

export default PlantCard;
