import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, className }) => {
  console.log('Box.jsx');
  return <div className={`box ${className}`.trim()}>{children}</div>;
};

Box.defaultProps = {
  className: '',
};

Box.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Box;
