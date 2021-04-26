import React from 'react'

export const Image = ({ src, alt }) => {
  console.log('Image.jsx')
  return (
    <figure className="image">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}
