// FlightOptions.js
import React, { useState } from 'react';
import '../styles/Vuelos.css';

const Flights = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const flights = [
    { id: 1, airline: 'Aerolínea A', price: 1200, duration: '2h', stops: 0 },
    { id: 2, airline: 'Aerolínea B', price: 1500, duration: '1.5h', stops: 1 },
    { id: 3, airline: 'Aerolínea C', price: 1000, duration: '2.5h', stops: 0 },
    { id: 4, airline: 'Aerolínea D', price: 1300, duration: '2h', stops: 1 },
  ];

  const sortedFlights = [...flights].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="flight-options">
      <h1>Vuelos de Tuxtla Gutiérrez a Oaxaca</h1>
      <div className="sort-buttons">
        <label>
          <input
            type="radio"
            value="asc"
            checked={sortOrder === 'asc'}
            onChange={handleSortOrderChange}
          />
          Ordenar por precio (más barato)
        </label>
        <label>
          <input
            type="radio"
            value="desc"
            checked={sortOrder === 'desc'}
            onChange={handleSortOrderChange}
          />
          Ordenar por precio (más caro)
        </label>
      </div>
      <ul>
        {sortedFlights.map((flight) => (
          <li key={flight.id} className="flight-card">
            <div className="flight-info">
              <h2>{flight.airline}</h2>
              <p>Precio: ${flight.price}</p>
              <p>Duración: {flight.duration}</p>
              <p>Paradas: {flight.stops}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flights;
