import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AnimatedContainer.css';
import icpService from '../services/icpService';

const AnimatedContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPackage = localStorage.getItem('selectedPackage');
    if (storedPackage) {
      setSelectedPackage(JSON.parse(storedPackage));
    }
  }, []);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
      setIsContentVisible(true); 
    }
  };

  const handlePurchase = async () => {
    if (!selectedPackage) return;

    setIsLoading(true);
    try {
      // Reemplaza con la dirección del destinatario real
      const recipient = 'ICP_RECIPIENT_ADDRESS';
      const amount = selectedPackage.price;

      // Crea la transacción
      const transaction = await icpService.createTransaction(amount, recipient);
      console.log('Transacción creada:', transaction);

      // Opcionalmente, verifica el estado de la transacción
      const status = await icpService.getTransactionStatus(transaction.id);
      console.log('Estado de la transacción:', status);

      // Navega a la página de éxito o muestra un mensaje de éxito
      navigate('/success');
    } catch (error) {
      console.error('Error durante la compra:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="containerCompra" onMouseEnter={handleMouseEnter}>
      <div className={`airplane ${isHovered ? 'fly' : ''}`}></div>
      <div className={`content ${isContentVisible ? 'show' : ''}`}>
        {selectedPackage && (
          <div className="contain">
            <h1>{selectedPackage.name}</h1>
            <p>Precio: ${selectedPackage.price}</p>
            <p>Vuelo: {selectedPackage.flight}</p>
            <p>Alojamiento: {selectedPackage.accommodation}</p>
            <p>Tour: {selectedPackage.tour}</p>
            <button onClick={handlePurchase} disabled={isLoading}>
              {isLoading ? 'Procesando...' : 'Comprar Ahora'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedContainer;
