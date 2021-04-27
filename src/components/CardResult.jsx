import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from './Image'

export const CardResult = ({ product }) => {
  console.log('CardResult.jsx', product)
  return (
    <div className="card-result">
      <Link to={`/items/${product.id}`} title={product.title} className="card-result-image">
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
        <Link to={`/items/${product.id}`} title={product.title} className="card-result__title">
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
  )
}
