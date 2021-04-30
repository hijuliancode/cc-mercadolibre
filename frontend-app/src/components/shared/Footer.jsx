import React from 'react';
import sectionsData from '../../utils/data-sections';
import Container from '../Container';

export const Footer = () => {
  console.log('Footer.jsx');

  const { footer_data: footer } = sectionsData;

  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrap">
          <nav className="footer__nav">
            {footer.nav_items.map((item) => (
              <a key={item.id} href={item.link_url}>
                {item.text}
              </a>
            ))}
          </nav>
          <p className="footer__text">{footer.copyright}</p>
          <p className="footer__text">{footer.address}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
