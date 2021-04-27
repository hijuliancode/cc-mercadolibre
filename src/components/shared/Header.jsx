import React from 'react'
import { Container } from '../Container'
import { Image } from '../Image'
import { SearchBar } from '../SearchBar'

export const Header = () => {
  console.log('Header.jsx')
  return (
    <header className="header">
     <Container>
        <div className="header__wrapper">
          <Image
            className="header__logo only-desktop"
            src="design/logos/log-mla.png"
            alt="Mercadolibre"
            height={32}
            width={126}
          />
          <SearchBar type="borderless" voice={false} />
        </div>
     </Container>
    </header>
  )
}
