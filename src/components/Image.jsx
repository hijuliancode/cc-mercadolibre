import React from 'react'

export const Image = ({ className = '', src, alt, height, width }) => {
  console.log('Image.jsx, src, alt', src, alt)
  return (
    <picture className={`image ${className}`} style={{height, width}}>
      <img src={require(`../images/${src}`).default} alt={alt} loading="lazy" />
    </picture>
  )
}
