import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import App from '../App';

describe('test in App.js', () => {
  let wrapper;
  
  test('should render <App/>', () => {
    wrapper = shallow( <App/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
