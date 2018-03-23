import React from 'react'
import Calculator from './Calculator'
import { shallow } from 'enzyme'

it('Should display calculator page correctly', () => {
  const calculator = shallow(<Calculator />)

  const form = calculator.find('form')
  expect(form.length).toBe(1)
  expect(form.find('input').length).toBe(2)
  expect(form.find('button').length).toBe(4)
  expect(form.find('p.result').length).toBe(1)
});

it('Should return the correct from plus', () => {
  const calculator = new Calculator()

  const result = calculator.plus(1, 2)
  expect(result).toEqual(3)
});
