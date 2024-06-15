import React from 'react';
import '../styles/OptionsBox.css';
import { Link } from 'react-router-dom';
function OptionsBox() {
  return (
    <section id="section_options">
      <div className="main_options-box">
    {/*        <a Link to="" className="option">Inicio</a>
        <a Link to="" className="option">Hoteles</a>
        <a Link to="" className="option">Restaurantes</a>
        <a Link to="" className="option">Zonas Turísticas</a>*/ }

        <Link to="/"> Inicio</Link>
        <Link to="/hoteles"> Hoteles</Link>
        <Link to="/tourist-zones"> Zonas Turisticas</Link>
        <Link to="/Vuelos">Vuelos</Link>
        <Link to="/Compra">Compra</Link>
        
      </div>
    </section>
  );
}

export default OptionsBox;
