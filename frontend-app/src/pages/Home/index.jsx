import React from 'react';
import { Helmet } from 'react-helmet';
import LayoutHome from '../Layouts/LayoutHome';
import { Image, SearchBar } from '../../components';

const Home = () => (
  <LayoutHome>
    <>
      <Helmet>
        <title>Mercado Libre Argentina</title>
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />
      </Helmet>
      <Image
        className="home__logo"
        src="design/logos/log-mla.png"
        alt="Mercadolibre"
        height={70}
        width={268}
      />
      <SearchBar className="mb-10" type="rounded" voice />
    </>
  </LayoutHome>
);

export default Home;
