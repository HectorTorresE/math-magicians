import operate from '../logic/operate';

describe('Operate function', () => {
  
  test('Multiply', () => {
    const n1 = 67;
    const n2 = 5;
    const result = operate(n1, n2, '*');
    expect(result).toBe('335');
  });
  test('Addition', () => {
    const n1 = 67;
    const n2 = 5;
    const result = operate(n1, n2, '+');
    expect(result).toBe('72');
  });
  test('Subtraction', () => {
    const n1 = 67;
    const n2 = 5;
    const result = operate(n1, n2, '-');
    expect(result).toBe('62');
  });
  test('Modulus', () => {
    const n1 = 2;
    const n2 = 5;
    const result = operate(n1, n2, '%');
    expect(result).toBe('2');
  });
  test('Division', () => {
    const n1 = 67;
    const n2 = 5;
    const result = operate(n1, n2, '÷');
    expect(result).toBe('13.4');
  });
});