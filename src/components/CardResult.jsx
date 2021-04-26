import React from 'react'
import { Link } from 'react-router-dom'

export const CardResult = ({ product }) => {
  console.log('CardResult.jsx', product)
  return (
    <Link to={`/items/${product.id}`} className="card-result">
      <h3>{product.title}</h3>
    </Link>
  )
}
