import React from 'react'
import { Container } from '../Container'
import SearchBar from '../SearchBar'

export const Header = () => {
  return (
    <header className="header">
     <Container>
      Header
      <SearchBar type="fill" voice={false} />
     </Container>
    </header>
  )
}
