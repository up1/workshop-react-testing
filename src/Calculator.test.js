import React from 'react';
import Calculator from './Calculator';
import { shallow } from 'enzyme';

it('Should display TODO NEXT', () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.find('div').text()).toEqual('TODO NEXT');
});
