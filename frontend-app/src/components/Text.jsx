import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => (
  <p className={`paragraph ${className}`.trim()}>{children}</p>
);

Text.defaultProps = {
  className: '',
};

Text.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Text;
