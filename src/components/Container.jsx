import React from 'react'

export const Container = ({ className = '', children }) => {
  console.log('Container.jsx')
  return (
    <div className={`container ${className}`.trim()}>
      {children}
    </div>
  )
}
