import React from "react";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleSearch(e){
    setSearch(e.target.value)
  }

  function submitiing(e){
    e.preventDefault()

      fetch('https://react-hooks-cc-plantshop-4-54zw.onrender.com/plants')
      .then((response) => response.json())
      .then((data) => {
  
        const searching = data && data.find((plant)=>{
          return plant.name === search
        })
        if (searching===undefined){
          alert("Plant not found")
        }
        else{
            return (
              <>
                <div className="modal show d-block" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{searching.name}</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img
                          src={`${searching.image}`}
                          alt={`${searching.name}`}
                          style={{ width: "95%" }}
                        />
                        <p>{searching.name}</p>
                        <p>{searching.price}</p>
          
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
        }
        console.log(searching);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    }
  


  return (
    <div className="searchbar">
      <form onSubmit={submitiing}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearch}
      />
      </form>
    </div>
  );
}

export default Search;
