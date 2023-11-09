import React, { useState } from 'react';
import PickupPage from './PickupPage';
import DeliveryPage from './DeliveryPage';
import './LockerComponent.css'; // Import the CSS file for styling

const LockerComponent = () => {
  const [currentPage, setCurrentPage] = useState(null); // Set it to null initially

  return (
    <div className="locker-container">
      <h1>Parcel Locker Simulator</h1>
      {currentPage === 'pickup' && (
        <PickupPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'delivery' && (
        <DeliveryPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === null && (
        <div className="navigation-buttons">
          <button onClick={() => setCurrentPage('pickup')}>Go to Pickup</button>
          <button onClick={() => setCurrentPage('delivery')}>Go to Delivery</button>
        </div>
      )}
    </div>
  );
};

export default LockerComponent;
