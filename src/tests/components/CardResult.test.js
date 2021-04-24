import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { CardResult } from '../../components/CardResult';


describe('test in CardResult.jsx', () => {
  let wrapper;
  
  test('should render <CardResult />', () => {
    wrapper = shallow( <CardResult/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
