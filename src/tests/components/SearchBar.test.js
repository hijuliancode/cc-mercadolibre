import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { SearchBar } from '../../components/SearchBar';


describe('test in SearchBar.jsx', () => {
  let wrapper;
  
  test('should render <SearchBar />', () => {
    wrapper = shallow( <SearchBar/> )
    expect( wrapper ).toMatchSnapshot()
  })
  
});
