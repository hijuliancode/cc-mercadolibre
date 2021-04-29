import React from 'react'

export const Image = ({ className = '', local = true, src, alt, height, width }) => {
  console.log('Image.jsx, src, alt', src, alt)
  return (
    <picture className={`image ${className}`.trim()} style={{height, width}}>
      <img src={local ? (require(`../images/${src}`).default) : src} alt={alt} loading="lazy" />
    </picture>
  )
}
