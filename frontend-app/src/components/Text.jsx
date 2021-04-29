import React from 'react'

export const Text = ({ children }) => {
  console.log('Text.jsx')
  return (
    <p className="paragraph">
      {children}
    </p>
  )
}
