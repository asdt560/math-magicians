import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Quote from './components/Quote';
import CalculatorPage from './components/CalculatorPage';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
