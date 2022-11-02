import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
