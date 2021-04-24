import React from 'react'
import { Link } from 'react-router-dom'

export const DemoComponent = () => {
  return (
    <>
      <h1 className="demo-component">Hello World</h1>
      <Link to="/">Home</Link>
      <Link to="/items/?search=Hola Mundo">Query Search</Link>
      <Link to="/items/77">Items:ID</Link>
    </>
  )
}
