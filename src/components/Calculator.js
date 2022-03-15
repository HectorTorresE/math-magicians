function Calculator() {
  const createInputs = () => {
    const inputs = ['AC','+/-','%','÷','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
    const btns = [];
    for (let i = 0; i < inputs.length; i += 1) {
      let btn = <button key={inputs[i]}>{inputs[i]}</button>;
      if ('÷+-*='.includes(inputs[i])) {
        btn = <button className="operators" key={inputs[i]}>{inputs[i]}</button>;
      }
      if (inputs[i] === '0') {
        btn = <button className="zero" key={inputs[i]}>{inputs[i]}</button>;
      }
      btns.push(btn);
    }
    return btns
  }

  return (
      <div className='calculator'>
        <div className='result'>
          <span>(0)</span> 0
        </div>
        <div className='digits'>
          {createInputs()}
        </div>
      </div>
  );
}

export default Calculator;