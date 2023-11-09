import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import PickupPage from './PickupPage';
import DeliveryPage from './DeliveryPage';
import NumericKeypad from './NumericKeypad';

function App() {
  const [activePage, setActivePage] = useState('pickup');
  const [inputValue, setInputValue] = useState('');

  const handleSwitchPage = (page) => {
    setActivePage(page);
  };

  const handleKeyClick = (number) => {
    if (inputValue.length < 4) {
      setInputValue(inputValue + number);
    }
  };

  return (
    <div className="App">
      <h1>Parcel Locker Simulator</h1>
      <div className="page-container">
        {activePage === 'pickup' && (
          <PickupPage inputValue={inputValue} setInputValue={setInputValue} />
        )}
        {activePage === 'delivery' && (
          <DeliveryPage inputValue={inputValue} setInputValue={setInputValue} />
        )}
      </div>
      <NumericKeypad onKeyClick={handleKeyClick} />
      <div className="page-switcher">
        <button onClick={() => handleSwitchPage('pickup')} disabled={activePage === 'pickup'}>
          Pickup
        </button>
        <button onClick={() => handleSwitchPage('delivery')} disabled={activePage === 'delivery'}>
          Delivery
        </button>
      </div>
    </div>
  );
}

export default App;
