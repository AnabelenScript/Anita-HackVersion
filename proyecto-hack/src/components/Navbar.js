import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <h2>logo</h2>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Buscar..." id="search-input" />
        <button id="search-button">Buscar</button>
      </div>
      <Link to="/Compra">Compra</Link>
      <div className="cancel">
        <h2>cancel</h2>
      </div>
    </nav>
  );
}

export default Navbar;
