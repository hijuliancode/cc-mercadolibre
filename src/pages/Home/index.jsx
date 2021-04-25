import React from 'react'
import { LayoutHome } from '../Layouts/LayoutHome'
import { DemoComponent } from '../../components/shared/DemoComponent'
import SearchBar from '../../components/SearchBar'

export const Home = () => {
  return (
    <LayoutHome>
      <DemoComponent />
      <SearchBar type="fill" voice={false} />
    </LayoutHome>
  )
}
