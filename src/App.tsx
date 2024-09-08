import React, { useState } from 'react';
import './App.css';

// .은 어떻게 해석하지

// 이렇게 해보고 싶은데
// const [calc, setCalc] = useState({
//   oper: '',
//   num: 0,
//   res: 0,
// });

// const newNum = Number(value);
// setCalc(
//   ...calc,
//   num: newNum,
// )

function App() {
  const [input, setInput] = useState(0); // 입력값 저장한다.
  const [res, setRes] = useState(0);

  const handleInput = (value) => {
    setInput(input + value);
    tokenize(input);
  };

  const handleCalculate = () => {};

  // 3. 연산자 우선순위에 따라 계산한다.
  function calOper(tokens, oper) {
    // 1. 배열 순차탐색
    // 2. 연산자를 만나면 계산 수행
    // 3. 연산자를 저장하고
  }

  // 4. 연산자를 처리하는 함수를 만든다.
  function calculate(tokens) {
    const priority = [
      {
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      },
      {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
      },
    ];
    reduce(calOper, tokens);
    if (tokens.length === 1) {
    }
  }

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className='calculator'>
      <div className='display'>{num}</div>
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
