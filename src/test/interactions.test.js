import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/navBar';
import Calculator from '../components/calculator';

describe('Navigation interaction', () => {
  test('Home', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    render(Element);
    const home = screen.getByText('Home');
    userEvent.click(home);

    expect(home.classList.contains('active')).toBeTruthy();
  });
  test('Calculator', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    render(Element);
    const calculator = screen.getByText('Calculator');
    userEvent.click(calculator);

    expect(calculator.classList.contains('active')).toBeTruthy();
  });
  test('Quote', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    render(Element);
    const quote = screen.getByText('Quote');
    userEvent.click(quote);
    const calculator = screen.getByText('Calculator');
    const home = screen.getByText('Home');
    expect(quote.classList.contains('active')).toBeTruthy();
  });
});