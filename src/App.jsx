import React, { useState } from 'react';
import './App.css';
import tokenize from './utils/tokenize';
import { calculate } from './utils/calculate';

function App() {
  const [input, setInput] = useState(''); // 문자열 반환
  const [result, setResult] = useState(null); // 숫자 반환

  const handleInput = (value) => {
    setInput(input + value);
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      const tokens = tokenize(input);
      const calResult = calculate(tokens);
      setResult(calResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className='calculator'>
      <div className='display'>{result !== null ? result : input}</div>
      <div className='buttons'>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}
export default App;
