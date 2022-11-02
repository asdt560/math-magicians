import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './components/title';

test('test title.js', () => {
  render(<Title />);
  const result = screen.getByText('Lets do some Math!');
  expect(result).toMatchSnapshot();
});
