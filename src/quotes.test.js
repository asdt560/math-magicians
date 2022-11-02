import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from './components/Quote';

test('test quote.js', () => {
  render(<Quote />);
  const result = screen.getByText('Mathematics is not about numbers, equations, calculations or algorithms: it is about understanding. --William Paul Thurston');
  expect(result).toMatchSnapshot();
});
