import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
        <form>
          <input type="number" defaultValue={ 0 }/>
          <input type="number" defaultValue={ 0 }/>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <p className='result'/>
        </form>
    );
  }
}

export default Calculator;
