import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('To test for display', () => {
  render(<Home />);
  const tree = screen.getByText('Welcome to our page');
  expect(tree).toMatchSnapshot();
});
