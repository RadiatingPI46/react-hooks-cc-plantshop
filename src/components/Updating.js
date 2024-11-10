import React from 'react'
import { useState } from 'react';

function Updating({plant}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(plant.name);
    const [price, setPrice] = useState(plant.price);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  function handleUpdate() {
    fetch(` https://react-hooks-cc-plantshop-4-54zw.onrender.com/plants/${plant.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: name,
          price: price,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }
  return (
    <div>
        <button onClick={openModal} style={{width:"100%"}}>Update</button>

        {isModalOpen && (
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{plant.name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={`${plant.image}`}
                alt={`${plant.name}`}
                style={{ width: "95%" }}
              />
              <form onSubmit={handleUpdate}>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
                <label>Price</label>
                <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <button type="submit">Update</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    )}

    </div>
  )
}

export default Updating