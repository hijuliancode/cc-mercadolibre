import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Box } from '../../components/Box';


describe('test in Box.jsx', () => {
  let wrapper;
  
  test('should render <Box />', () => {
    wrapper = shallow( <Box/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
