import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import LayoutInternal from '../Layouts/LayoutInternal';
import { useFetchItem } from '../../hooks';
import { Alert, Box, Container, Image } from '../../components';
import Button from '../../components/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetchItem(id);

  return (
    <LayoutInternal>
      <Helmet>
        <title>MercadoLibre.com</title>
      </Helmet>
      <Container className="d-flex">
        <Box className="radius-xm p-6">
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
            <div className="product">
              <div className="grid-lg lg-columns-9-3 mb-8">
                <div className="grid-lg lg-columns-11-1">
                  <div className="product-gallery radius-xm">
                    <Image
                      className="radius-xm"
                      alt={product.title}
                      height={340}
                      local={false}
                      src={product.thumbnail}
                      width={340}
                    />
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-status">Nuevo - 254 Vendidos</span>
                  <h2 className="product-name">{product.title}</h2>
                  <span className="product-price">
                    $1.980 <sup>00</sup>
                  </span>
                  <div className="product-btn-buy">
                    <Button className="btn-primary" width="full">
                      Comprar
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid-lg lg-columns-9-3 mb-8">
                <div className="grid-lg lg-columns-11-1">
                  <div>
                    <h4 className="product-title">Descripcion del producto</h4>
                    <p className="product-desc">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis eveniet labore ducimus animi enim rem!
                      Perspiciatis ullam a iusto obcaecati ducimus aperiam,
                      vitae rerum ratione pariatur, sit expedita facere ipsam?
                    </p>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          )}
        </Box>
      </Container>
    </LayoutInternal>
  );
};

export default ProductDetail;
