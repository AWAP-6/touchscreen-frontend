import React from 'react';
import './NumericKeypad.css';


const NumericKeypad = ({ onKeyClick, onClearClick, onEnterClick, setCurrentPage }) => {
  const keypadNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="numeric-keypad">
      {keypadNumbers.map((number) => (
        <button key={number} onClick={() => onKeyClick(number)}>
          {number}
        </button>
      ))}
      <button className="clear" onClick={onClearClick}>Clear</button>
      <button className="zero" onClick={() => onKeyClick(0)}>0</button>
      <button className="enter" onClick={onEnterClick}>Enter</button>
      <button className="back" onClick={() => setCurrentPage('menu')}>Back to Menu</button>
    </div>
  );
};

export default NumericKeypad;