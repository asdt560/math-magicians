import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import CalculatorPage from './components/CalculatorPage';

it('test calculatorpage', () => {
  render(<CalculatorPage />);
  const result = document.querySelector('.pagecontainer');
  expect(result).toMatchSnapshot();
});
