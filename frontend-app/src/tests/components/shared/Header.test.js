import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Header } from '../../../components/shared/Header';


describe('test in Header.jsx', () => {
  let wrapper;
  
  test('should render <Header />', () => {
    wrapper = shallow( <Header/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
