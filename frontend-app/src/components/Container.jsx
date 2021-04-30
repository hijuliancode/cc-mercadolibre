import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  console.log('Container.jsx');
  return <div className={`container ${className}`.trim()}>{children}</div>;
};

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Container;
