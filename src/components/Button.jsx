import React from 'react'

export const Button = ({ value, onHandleClick }) => {
  return (
    <button className="container" onClick={() => onHandleClick}>
      {value}
    </button>
  )
}
