import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import operate from './logic/operate';
import calculate from './logic/calculate';
import Navbar from './components/Navbar';

describe('test operate component', () => {
  it('test addition', () => {
    const result = operate('4', '2', '+');
    expect(result).toBe('6');
  });
  it('test substraction', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });
  it('test modulo', () => {
    const result = operate('9', '2', '%');
    expect(result).toBe('1');
  });
  it('test zero error', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});

describe('test calculate component', () => {
  it('test addition', () => {
    const state = {
      total: '2',
      next: '2',
      operation: '+',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('4');
  });
  it('test substraction', () => {
    const state = {
      total: '2',
      next: '2',
      operation: '-',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('0');
  });
  it('test division', () => {
    const state = {
      total: '2',
      next: '2',
      operation: '÷',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('1');
  });
  it('test multiplication', () => {
    const state = {
      total: '2',
      next: '2',
      operation: 'x',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe('4');
  });
  it('test divide by zero error', () => {
    const state = {
      total: '2',
      next: '0',
      operation: '÷',
    };
    const result = calculate(state, '=');
    expect(result.total).toBe("Can't divide by 0.");
  });
  it('test AC button', () => {
    const state = {
      total: '2',
      next: '2',
      operation: 'x',
    };
    const result = calculate(state, 'AC');
    expect(result.total).toBe(null);
  });
  it('test -/+ button', () => {
    const state = {
      total: '2',
      next: '2',
      operation: 'x',
    };
    const result = calculate(state, '+/-');
    expect(result.next).toBe('-2');
  });
});

describe('components test', () => {
  it('Navbar component', async () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const navbar = `<header>
    <h1>Math Magicians</h1>
    <ul>
      <li className="navitem"><Link to="/">Home</Link></li>
      <li className="navitem"><Link to="/calculator">Calculator</Link></li>
      <li className="navitem"><Link to="/quote">Quote</Link></li>
    </ul>
  </header>`;
    expect(navbar).toMatchSnapshot();
  });
});
