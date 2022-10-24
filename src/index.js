import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './components/Calculator';
import reportWebVitals from './reportWebVitals';

const Title = () => {
  useEffect(() => {
    document.title = 'Calculator';
  });
  return (
    <section hidden><div>Lets do some Math</div></section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Calculator />
  </React.StrictMode>,
);

Title();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
