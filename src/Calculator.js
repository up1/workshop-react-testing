import React, { Component } from 'react';

class Calculator extends Component {

  constructor() {
    super()
    this.state = {
      result: null,
    }
    this.elements = {}
    this.onPlus = this.onPlus.bind(this);
  }

  render() {
    const { result } = this.state
    return (
        <form>
          <input type="number" defaultValue={ 0 } ref={ (el) => this.elements.firstValue = el }/>
          <input type="number" defaultValue={ 0 } ref={ (el) => this.elements.secondValue = el }/>
          <button type="button" className='plus' onClick={ this.onPlus }>+</button>
          <button type="button">-</button>
          <button type="button">*</button>
          <button type="button">/</button>
          <p className='result'>{ result }</p>
        </form>
    );
  }

  onPlus() {
    const firstValue = parseInt(this.elements.firstValue.value, 10)
    const secondValue = parseInt(this.elements.secondValue.value, 10)
    const resultPlus = this.plus(firstValue, secondValue)
    this.setState({
      result: resultPlus,
    });
  }

  plus(firstValue, secondValue) {
    return firstValue + secondValue
  }

}

export default Calculator;
