import React from 'react'

export const Alert = ({ children }) => {
  console.log('Alert.jsx')
  return (
    <div className="alert">
      {children}
    </div>
  )
}
