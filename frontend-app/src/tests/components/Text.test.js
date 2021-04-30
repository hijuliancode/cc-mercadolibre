import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Text } from '../../components/Text';


describe('test in Text.jsx', () => {
  let wrapper;
  
  test('should render <Text />', () => {
    wrapper = shallow( <Text/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
