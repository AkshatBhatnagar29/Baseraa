import React, { useState } from 'react';
import './Buy.css';
import { BuyCards } from './buyCards.js';
import { ground } from './data.js';

export default function Buy() {
  const [search, setSearch] = useState("");
  const [groundArray, setGroundArray] = useState([]);

  const handleOnSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredGrounds = ground.filter((g) =>
      g.place.toLowerCase().includes(search.toLowerCase())
    );
    setGroundArray(filteredGrounds);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          onChange={handleOnSearch}
          value={search}
          placeholder="Search..."
        />
        <button type="submit">View</button>
      </form>
      <div className="container my-3" style={{ color: 'white'  }}>
        <h1>Best Houses for you</h1>
        <div className="row">
          {groundArray.map((element, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <BuyCards
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
