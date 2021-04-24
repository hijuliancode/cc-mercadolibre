import React from 'react'
import { LayoutHome } from '../Layouts/LayoutHome'
import { DemoComponent } from '../../components/shared/DemoComponent'

export const Home = () => {
  return (
    <LayoutHome>
      <h1>Home</h1>
      <DemoComponent />
    </LayoutHome>
  )
}
