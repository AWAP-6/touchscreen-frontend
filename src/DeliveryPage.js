import React from 'react';
import './NumericKeypad.css'; // Import the CSS file

const DeliveryPage = ({ inputValue, setInputValue, onClearClick, onEnterClick }) => {
  const handleInput = (e) => {
    // Limit the input to four digits
    const newValue = e.target.value.slice(0, 4);
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>Delivery Page</h2>
      <label>Enter Delivery Code:</label>
      <input type="text" value={inputValue} onChange={handleInput} />
      <div className="button-container">
        <button onClick={onClearClick}>Clear</button>
        <button onClick={onEnterClick}>Enter</button>
      </div>
    </div>
  );
};

export default DeliveryPage;
