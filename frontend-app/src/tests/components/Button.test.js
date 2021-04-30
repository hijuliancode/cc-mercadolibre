import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Button } from '../../components/Button';


describe('test in Button.jsx', () => {
  let wrapper;
  
  test('should render <Button />', () => {
    wrapper = shallow( <Button/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
