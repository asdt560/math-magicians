import React from 'react';

// eslint-disable-next-line
class Calculator extends React.Component {
  render() {
    return (
      <section className="calculator">
        <div className="row top">0</div>
        <div className="row">
          <div className="button">AC</div>
          <div className="button">+/-</div>
          <div className="button">%</div>
          <div className="button orange">÷</div>
        </div>
        <div className="row">
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button orange">x</div>
        </div>
        <div className="row">
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button orange">-</div>
        </div>
        <div className="row">
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button orange">+</div>
        </div>
        <div className="row">
          <div className="button zero">0</div>
          <div className="button">.</div>
          <div className="button orange">=</div>
        </div>
      </section>
    );
  }
}

export default Calculator;
