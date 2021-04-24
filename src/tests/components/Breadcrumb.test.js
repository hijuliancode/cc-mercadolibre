import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Breadcrumb } from '../../components/Breadcrumb';


describe('test in Breadcrumb.jsx', () => {
  let wrapper;
  
  test('should render <Breadcrumb />', () => {
    wrapper = shallow( <Breadcrumb/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
