import React from 'react';
import { Helmet } from 'react-helmet';
import LayoutInternal from '../Layouts/LayoutInternal';

const NotFound = () => (
  <LayoutInternal>
    <Helmet>
      <title>Página no encontrada | MercadoLibre.com</title>
    </Helmet>
    <h1>Not Found</h1>
  </LayoutInternal>
);

export default NotFound;
