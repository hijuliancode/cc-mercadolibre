import React from 'react'
import { Container } from '../Container'
import { SearchBar } from '../SearchBar'

export const Header = () => {
  console.log('Header.jsx')
  return (
    <header className="header">
     <Container>
      Header
      <SearchBar type="rouded" voice={false} />
     </Container>
    </header>
  )
}
