import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  position: absolute;
  top: 0;
`

export const DemoComponent = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/items/?search=Hola Mundo">Query Search</Link>
      <Link to="/items/77">Items:ID</Link>
    </Nav>
  )
}
