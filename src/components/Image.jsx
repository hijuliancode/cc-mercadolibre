import React from 'react'

export const Image = ({ src, alt }) => {
  return (
    <figure className="image">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}
