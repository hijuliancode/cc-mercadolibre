import React from 'react'

export const Container = ({ children }) => {
  console.log('Container.jsx')
  return (
    <div className="container">
      {children}
    </div>
  )
}
