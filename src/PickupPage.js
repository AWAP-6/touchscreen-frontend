import React from 'react';
import './NumericKeypad.css'; // Import the CSS file

const PickupPage = ({ inputValue, setInputValue, onClearClick, onEnterClick }) => {
  const handleInput = (e) => {
    // Limit the input to four digits
    const newValue = e.target.value.slice(0, 4);
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>Pickup Page</h2>
      <label>Enter Pickup Code:</label>
      <input type="text" value={inputValue} onChange={handleInput} />
      <div className="button-container">

      </div>
    </div>
  );
};

export default PickupPage;
