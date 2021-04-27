import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Container'
import { Image } from '../Image'
import { SearchBar } from '../SearchBar'

export const Header = () => {
  console.log('Header.jsx')
  return (
    <header className="header">
     <Container>
        <div className="header__wrapper">
          <Link to="/" title="Mercadolibre Home">
            <Image
              className="header__logo only-desktop"
              src="design/logos/log-mla.png"
              alt="Mercadolibre"
              height={32}
              width={126}
            />
          </Link>
          <SearchBar type="borderless" voice={false} />
        </div>
     </Container>
    </header>
  )
}
