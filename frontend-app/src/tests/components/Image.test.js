import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Image } from '../../components/Image';


describe('test in Image.jsx', () => {
  let wrapper;
  
  test('should render <Image />', () => {
    wrapper = shallow( <Image/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
