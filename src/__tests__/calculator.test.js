import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('calculator.js tests', () => {
  it('calculator render test', () => {
    render(<Calculator />);
    const result = document.querySelector('.calculator');
    expect(result).toMatchSnapshot();
  });

  it('calculator interaction test - add a number', async () => {
    render(<Calculator />);
    await userEvent.click(screen.getByText('9'));
    const result = document.querySelector('.top');
    expect(result).toHaveTextContent('9');
  });

  it('calculator interaction test - perform operation', async () => {
    render(<Calculator />);
    const nine = screen.getByText('9');
    await userEvent.click(nine);
    await userEvent.click(screen.getByText('x'));
    await userEvent.click(nine);
    await userEvent.click(screen.getByText('='));
    const result = document.querySelector('.top');
    expect(result).toHaveTextContent('81');
  });
});
