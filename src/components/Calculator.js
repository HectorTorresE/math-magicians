import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  function Handler(e) {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }

  const createInputs = () => {
    const inputs = ['AC', '+/-', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const btns = [];
    for (let i = 0; i < inputs.length; i += 1) {
      let btn = <button type="button" key={inputs[i]}>{inputs[i]}</button>;
      if ('÷+-*='.includes(inputs[i])) {
        btn = <button type="button" className="operators" key={inputs[i]}>{inputs[i]}</button>;
      }
      if (inputs[i] === '0') {
        btn = <button type="button" className="zero" key={inputs[i]}>{inputs[i]}</button>;
      }
      btns.push(btn);
    }
    return btns;
  };

  return (
    <div className="calculator" role="button" tabIndex="0" onClick={Handler} onKeyDown={Handler}>
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <div className="digits">
        {createInputs()}
      </div>
    </div>
  );
}

export default Calculator;
