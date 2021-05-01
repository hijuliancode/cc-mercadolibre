import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items, className }) => (
  <ul className={`breadcrumb ${className}`.trim()}>
    <li className="breadcrumb__item">{items}</li>
  </ul>
);

Breadcrumb.defaultProps = {
  className: '',
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
  items: PropTypes.string.isRequired,
};

export default Breadcrumb;
