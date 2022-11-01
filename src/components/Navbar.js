import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    document.title = 'Calculator';
  });
  return (
    <header>
      <h1>Math Magicians</h1>
      <ul>
        <li className="navitem"><Link to="/">Home</Link></li>
        <li className="navitem"><Link to="/calculator">Calculator</Link></li>
        <li className="navitem"><Link to="/quote">Quote</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
