import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    if (e.target.innerHTML.match(/[0-9]+/)) {
      this.setState((prevState) => ({
        total: prevState.next,
        next: e.target.innerHTML,
      }));
    } else {
      this.setState({ operation: e.target.innerHTML });
    }
    const result = calculate(this.state, e.target.innerHTML);
    this.setState(result);
  }

  render() {
    const states = this.state;
    let result = '0';
    if (states.total !== null) {
      result = states.total;
    } else if (states.total === null && states.next === null) {
      result = '0';
    } else {
      result = states.next;
    }
    return (
      <section className="calculator">
        <div className="row top">
          { result }
        </div>
        <div className="row">
          <button className="button" type="button" onClick={this.onClickHandler}>AC</button>
          <button className="button" type="button" onClick={this.onClickHandler}>+/-</button>
          <button className="button" type="button" onClick={this.onClickHandler}>%</button>
          <button className="button orange" type="button" onClick={this.onClickHandler}>÷</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={this.onClickHandler}>7</button>
          <button className="button" type="button" onClick={this.onClickHandler}>8</button>
          <button className="button" type="button" onClick={this.onClickHandler}>9</button>
          <button className="button orange" type="button" onClick={this.onClickHandler}>x</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={this.onClickHandler}>4</button>
          <button className="button" type="button" onClick={this.onClickHandler}>5</button>
          <button className="button" type="button" onClick={this.onClickHandler}>6</button>
          <button className="button orange" type="button" onClick={this.onClickHandler}>-</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={this.onClickHandler}>1</button>
          <button className="button" type="button" onClick={this.onClickHandler}>2</button>
          <button className="button" type="button" onClick={this.onClickHandler}>3</button>
          <button className="button orange" type="button" onClick={this.onClickHandler}>+</button>
        </div>
        <div className="row">
          <button className="button zero" type="button" onClick={this.onClickHandler}>0</button>
          <button className="button" type="button" onClick={this.onClickHandler}>.</button>
          <button className="button orange" type="button" onClick={this.onClickHandler}>=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
