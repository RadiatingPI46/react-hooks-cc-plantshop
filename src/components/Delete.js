import React from 'react'

function Delete({plant}) {
    function deleteCard(){
        fetch(` http://localhost:6001/plants/${plant.id}`, {
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