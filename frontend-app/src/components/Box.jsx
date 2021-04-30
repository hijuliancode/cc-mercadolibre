import React from 'react'

export const Box = ({ children, className = '' }) => {
  console.log('Box.jsx')
  return (
    <div className={`box ${className}`.trim()}>
      {children}
    </div>
  )
}
