import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">Basera</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
      </ul>
    </div>
  );
}
