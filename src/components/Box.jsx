import React from 'react'

export const Box = ({ children }) => {
  console.log('Box.jsx')
  return (
    <div className="box">
      {children}
    </div>
  )
}
