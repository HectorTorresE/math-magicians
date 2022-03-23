import React from 'react';
import Calculator from '../components/Calculator';
import './calculator.css';

class CalculatorPage extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default CalculatorPage;


