import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (input === 'Error') setInput('');
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
        <h2 style={{
  textAlign: 'center',
  fontSize: '32px',
  marginTop: '20px',
  marginBottom: '20px',
  fontWeight: 'bold'
}}>
  Calculator
</h2>

      <input type="text" value={input} readOnly className="calculator-display" />

      <div className="calculator-buttons">
        <button onClick={handleClear} className="btn red">C</button>
        <button onClick={handleBackspace} className="btn">⌫</button>
        <button onClick={() => handleClick('%')} className="btn">%</button>
        <button onClick={() => handleClick('/')} className="btn">/</button>

        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleClick('*')} className="btn">*</button>

        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleClick('-')} className="btn">-</button>

        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={() => handleClick('+')} className="btn">+</button>

        <button onClick={() => handleClick('0')} className="btn">0</button>
        <button onClick={() => handleClick('.')} className="btn">.</button>
        <button onClick={handleEqual} className="btn equal">=</button>
      </div>
    </div>
  );
};

export default Calculator;
