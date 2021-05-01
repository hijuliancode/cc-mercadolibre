import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../../hooks';

import LayoutInternal from '../Layouts/LayoutInternal';
import { Alert, Box, CardResult, Container } from '../../components';

const Results = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get('search');
  const { data: results, loading } = useSearch(searchQuery);

  return (
    <LayoutInternal>
      <>
        <Helmet>
          <title>{searchQuery} | MercadoLibre.com</title>
          <meta
            name="description"
            content={`Encuentra ${searchQuery} - Calzado en MercadoLibre.com.co! Entre y conozca
            nuestras increíbles ofertas y promociones. Descubre la mejor forma de
            comprar online.`}
          />
        </Helmet>
        <Container className="d-flex">
          <Box className="radius-xm">
            <>
              {loading ? (
                <Alert
                  className="mt-6 ml-auto mr-auto"
                  width="auto"
                  align="center"
                  type="light"
                >
                  Cargando..
                </Alert>
              ) : (
                results.map((elm) => <CardResult key={elm.id} product={elm} />)
              )}
            </>
          </Box>
        </Container>
      </>
    </LayoutInternal>
  );
};

export default Results;
