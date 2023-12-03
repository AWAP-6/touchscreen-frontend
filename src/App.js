import React, { useState } from 'react';
import './App.css';
import NumericKeypad from './NumericKeypad';
import { checkOpenCode, updateLockerStatus } from './api';

function App() {
  const [activePage, setActivePage] = useState('menu');
  const [inputValue, setInputValue] = useState('');
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const handleKeyClick = (number) => {
    setInputValue(prev => (prev.length < 4 ? prev + number : prev));
  };

  const handleClearClick = () => {
    setInputValue('');
  };
  const handleClosePopup = () => {
    setIsDoorOpen(false);
    setActivePage('menu');
  };

  const handleEnterClick = () => {
    checkOpenCode(inputValue)
      .then(response => {
        if (response.data) {
          const status = response.data.status;
          if (status === 'ready for customer pickup' && activePage === 'delivery') {
            alert("This box is for pickup");
            setActivePage('pickup'); 
          } else if (status === 'reserved by customer' && activePage === 'pickup') {
            alert("This box is for delivery");
            setActivePage('delivery'); 
          } else {
            console.log(`${activePage === 'pickup' ? 'Pickup' : 'Delivery'} code is correct`);
            const operation = activePage === 'pickup' ? 'available' : 'deliver to warehouse';
            updateLockerStatus(inputValue, operation)
              .then(() => {
                console.log(`Operation "${operation}" was successful`);
                setIsDoorOpen(true);
              })
              .catch(error => {
                console.error(`Error while updating locker status:`, error);
              });
          }
        } else {
          console.error(`${activePage === 'pickup' ? 'Pickup' : 'Delivery'} code is incorrect`);
        }
        setInputValue('');
      })
      .catch(error => {
        console.error("Error while checking code:", error);
      });
  };

  return (
    <div className="App">
      <h1>Parcel Locker Simulator</h1>
      
      {activePage === 'menu' && (
        <div className="page-switcher">
          <button onClick={() => setActivePage('pickup')}>Pickup</button>
          <button onClick={() => setActivePage('delivery')}>Delivery</button>
        </div>
      )}

      {(activePage === 'pickup' || activePage === 'delivery') && (
        <>
          <h2>{activePage === 'pickup' ? 'Pickup Page' : 'Delivery Page'}</h2>
          <label>Enter Code:</label>
          <input 
            type="text" 
            value={inputValue} 
            readOnly 
          />
          <NumericKeypad 
            onKeyClick={handleKeyClick} 
            onClearClick={handleClearClick} 
            onEnterClick={handleEnterClick}
            setCurrentPage={setActivePage}
          />
        </>
      )}

      {isDoorOpen && (
        <div className="popup">
          <p>{activePage.charAt(0).toUpperCase() + activePage.slice(1)} locker door open</p>
          <button onClick={handleClosePopup}>Close locker door</button>
        </div>
      )}
    </div>
  );
}

export default App;