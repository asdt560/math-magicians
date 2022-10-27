import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '0',
    operation: null,
  });
  const onClickHandler = (e) => {
    if (e.target.innerHTML.match(/[0-9]+/)) {
      setState((prevState) => ({
        total: prevState.next,
        next: e.target.innerHTML,
      }));
    } else {
      setState({ operation: e.target.innerHTML });
    }
    const result = calculate(state, e.target.innerHTML);
    setState(result);
  };
  let result = '0';
  if (state.total !== null) {
    result = state.total;
  } else if (state.total === null && state.next === null) {
    result = '0';
  } else {
    result = state.next;
  }
  return (
    <section className="calculator">
      <div className="row top">
        { result }
      </div>
      <div className="row">
        <button className="button" type="button" onClick={onClickHandler}>AC</button>
        <button className="button" type="button" onClick={onClickHandler}>+/-</button>
        <button className="button" type="button" onClick={onClickHandler}>%</button>
        <button className="button orange" type="button" onClick={onClickHandler}>÷</button>
      </div>
      <div className="row">
        <button className="button" type="button" onClick={onClickHandler}>7</button>
        <button className="button" type="button" onClick={onClickHandler}>8</button>
        <button className="button" type="button" onClick={onClickHandler}>9</button>
        <button className="button orange" type="button" onClick={onClickHandler}>x</button>
      </div>
      <div className="row">
        <button className="button" type="button" onClick={onClickHandler}>4</button>
        <button className="button" type="button" onClick={onClickHandler}>5</button>
        <button className="button" type="button" onClick={onClickHandler}>6</button>
        <button className="button orange" type="button" onClick={onClickHandler}>-</button>
      </div>
      <div className="row">
        <button className="button" type="button" onClick={onClickHandler}>1</button>
        <button className="button" type="button" onClick={onClickHandler}>2</button>
        <button className="button" type="button" onClick={onClickHandler}>3</button>
        <button className="button orange" type="button" onClick={onClickHandler}>+</button>
      </div>
      <div className="row">
        <button className="button zero" type="button" onClick={onClickHandler}>0</button>
        <button className="button" type="button" onClick={onClickHandler}>.</button>
        <button className="button orange" type="button" onClick={onClickHandler}>=</button>
      </div>
    </section>
  );
};

export default Calculator;
