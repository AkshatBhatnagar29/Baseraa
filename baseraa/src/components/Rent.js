import React, { useState } from 'react';
import './Rent.css';
import { RentCards } from './rentCards.js';
import { ground } from './data.js';

export default function Rent() {
  const [search, setSearch] = useState("");
  const [groundArray, setGroundArray] = useState([]);

  const handleOnSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    let filteredGrounds = [];
    for (let i = 0; i < ground.length; i++) {
      if (ground[i].place.toLowerCase().includes(search.toLowerCase())) {
        filteredGrounds.push(ground[i]);
      }
    }
    setGroundArray(filteredGrounds);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleOnSearch} value={search} placeholder="Search..." />
        <button type="submit">View</button>
      </form>
      <div className="container my-3" style={{ color: 'white' }}>
        <h1>Best Plots for you</h1>
        <div className="row">
          {groundArray.map((element, index) => (
            <div className="col-md-4" key={index}>
              <RentCards
                place={element.place}
                area={element.area}
                shape={element.shape}
                cost={element.cost}
                rating={element.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
