import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Container } from '../../components/Container';


describe('test in Container.jsx', () => {
  let wrapper;
  
  test('should render <Container />', () => {
    wrapper = shallow( <Container/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
