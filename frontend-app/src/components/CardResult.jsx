import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './Image';

const CardResult = ({ product, className }) => (
  <div className={`card-result ${className}`.trim()}>
    <Link
      to={`/items/${product.id}`}
      title={product.title}
      className="card-result-image"
    >
      <Image
        className="radius-xm"
        alt={product.title}
        height={160}
        local={false}
        src={product.thumbnail}
        width={160}
      />
    </Link>
    <div className="card-result-desc">
      <Link
        to={`/items/${product.id}`}
        title={product.title}
        className="card-result__title"
      >
        <h2>{product.title}</h2>
      </Link>
      {/* <Link to={`/items/${product.id}`} title={product.seller.eshop.nick_name} className="card-result__author">
          <span>{product.seller.eshop.nick_name}</span>
        </Link> */}
      <p className="card-result__price" title={`$ ${product.price}`}>
        <span className="price-symbol">$</span>
        <span className="price-fract">{product.price}</span>
      </p>
    </div>
  </div>
);

CardResult.defaultProps = {
  className: '',
};

CardResult.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  className: PropTypes.string,
};

export default CardResult;
