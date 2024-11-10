import React from 'react'

function Delete({plant}) {
    function deleteCard(){
        fetch(` https://react-hooks-cc-plantshop-4-54zw.onrender.com/plants/${plant.id}`, {
          method: 'DELETE',
        });
        console.log("success");
        
      }
  return (
    <div>
        <button onClick={deleteCard} style={{width:"100%"}}>Delete</button>
    </div>
  )
}

export default Delete