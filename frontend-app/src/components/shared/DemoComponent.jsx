import React from 'react';
import { Link } from 'react-router-dom';

export const DemoComponent = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/items/?search=Hola Mundo">Query Search</Link>
    <Link to="/items/MLA719793747">Items:ID</Link>
  </nav>
);

export default DemoComponent;
