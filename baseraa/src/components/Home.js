import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="card-list">
        <Link to="/buy" className="card-item">
          <div className="card-content">
            <span className="card-title">Buy</span>
            <h3>Buy your dream house.</h3>
          </div>
        </Link>
        <Link to="/rent" className="card-item">
          <div className="card-content">
            <span className="card-title">Rent</span>
            <h3>Rent a perfect room.</h3>
          </div>
        </Link>
        <Link to="/sale" className="card-item">
          <div className="card-content">
            <span className="card-title">Sale</span>
            <h3>Plots for sale.</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
