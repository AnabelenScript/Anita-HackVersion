// AnimatedContainer.js
import React, { useState } from 'react';
import '../styles/AnimatedContainer.css';

const AnimatedContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
      setIsContentVisible(true); 
    }
  };

  return (
    <div className="containerCompra" onMouseEnter={handleMouseEnter}>
      <div className={`airplane ${isHovered ? 'fly' : ''}`}></div>
      <div className={`content ${isContentVisible ? 'show' : ''}`}>
        <div className="contain">
        <h1>Tuxtla Gutierrez a Oaxaca</h1>
        <p>Caracteristicas del vuelo</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedContainer;
