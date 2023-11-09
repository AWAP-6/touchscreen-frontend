import React from 'react';

const NumericKeypad = ({ onKeyClick, onClearClick, onEnterClick }) => {
  const keypadNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="numeric-keypad">
      <div className="keypad-grid">
        {keypadNumbers.map((number) => (
          <button key={number} onClick={() => onKeyClick(number)}>
            {number}
          </button>
        ))}
        <div className="button-container">
          <button onClick={onClearClick}>Clear</button>
          <button onClick={onEnterClick}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default NumericKeypad;
