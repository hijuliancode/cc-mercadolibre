import React from 'react'
import { Link } from 'react-router-dom'

export const CardResult = ({ children, product }) => {
  console.log('render CardResult, product', product)
  return (
    <Link to={`/items/${product.id}`} className="card-result">
      <h1>Result</h1>
      { children }
    </Link>
  )
}
