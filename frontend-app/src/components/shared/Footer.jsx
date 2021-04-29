import React from 'react'
import { footerData } from '../../utils/data-sections'
import { Container } from '../Container'

export const Footer = () => {
  console.log('Footer.jsx')
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrap">
          <nav className="footer__nav">
            { footerData.nav_items.map((item) => (
              <a key={item.id} href={item.link_url}>{item.text}</a>
            ))}
          </nav>
          <p className="footer__text">{footerData.copyright}</p>
          <p className="footer__text">{footerData.address}</p>
        </div>
      </Container>
    </footer>
  )
}
