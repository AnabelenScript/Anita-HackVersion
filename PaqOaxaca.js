import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PaqOaxaca.css';
import chapulin from '../images/chapulin.png'; 
import alebrijes from '../images/alebrijes.png';
import gusano from '../images/gusano.png';
import centroHistorico from '../images/centroHistorico.jpg';
import monteAlban from '../images/monteAlban.jpg';
import hierveAgua from '../images/hierveAgua.jpg';

const PaqOaxaca = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const packages = [
    {
      id: 1,
      name: 'Paquete Económico',
      price: 5000,
      flight: 'Vuelo en clase turista',
      accommodation: 'Hotel 3 estrellas',
      tour: 'Tour por el centro histórico de Oaxaca',
    },
    {
      id: 2,
      name: 'Paquete Intermedio',
      price: 8000,
      flight: 'Vuelo en clase ejecutiva',
      accommodation: 'Hotel 4 estrellas',
      tour: 'Tour por el centro histórico y Monte Albán',
    },
    {
      id: 3,
      name: 'Paquete Lujo',
      price: 12000,
      flight: 'Vuelo en primera clase',
      accommodation: 'Resort 5 estrellas todo incluido',
      tour: 'Tour completo por Oaxaca incluyendo Hierve el Agua y Mitla',
    },
  ];

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleBuyButtonClick = () => {
    localStorage.setItem('selectedPackage', JSON.stringify(selectedPackage));
    navigate('/Compra');
  };

  return (
    <div className="package-options">
      {loading ? (
        <div className="loading-container">
          <img src={chapulin} alt="Chapulín" className="jumping-chapulin" />
        </div>
      ) : (
        <>
          <div className="alebrije">
            <img src={alebrijes} className="alebrije" />
          </div>
          <div className="monteAlban">
            <img src={monteAlban} className="monteAlban" />
          </div>
          <div className="hierveAgua">
            <img src={hierveAgua} className="hierveAgua" />
          </div>
          <div className="gusano-container">
            <img src={gusano} className="sliding-gusano" />
          </div>
          <div className="centroHistorico">
            <img src={centroHistorico} className="centroHistorico" />
          </div>
          <h1>Paquetes de Viaje a Oaxaca</h1>
          <ul>
            {packages.map((pkg) => (
              <li key={pkg.id} className="package-card">
                <div className="package-info">
                  <h2>{pkg.name}</h2><br/>
                  <p>Precio: ${pkg.price}</p>
                  <p>Vuelo: {pkg.flight}</p>
                  <p>Alojamiento: {pkg.accommodation}</p>
                  <p>Tour: {pkg.tour}</p>
                </div>
                <button className="enlace" onClick={() => handlePackageClick(pkg)}>
                  Ver Detalles
                </button>
              </li>
            ))}
          </ul>
          {selectedPackage && (
            <div className="popup">
              <h2>Detalles del {selectedPackage.name}</h2><br/>
              <p>Vuelo: {selectedPackage.flight}</p><br/>
              <p>Alojamiento: {selectedPackage.accommodation}</p><br/>
              <p>Tour: {selectedPackage.tour}</p><br/>
              <p>Precio: ${selectedPackage.price}</p><br/><br/><br/><br/>
              <button className="enlace" onClick={handleBuyButtonClick}>
            Comprar Ahora<br/>
              </button> <br/><br/>    
            <button className="enlace" onClick={() => setSelectedPackage(null)}>
              Cerrar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaqOaxaca;
