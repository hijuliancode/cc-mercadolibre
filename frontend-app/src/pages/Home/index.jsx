import React from 'react';
import LayoutHome from '../Layouts/LayoutHome';
import { Image, SearchBar } from '../../components';

const Home = () => (
  <LayoutHome>
    <>
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
