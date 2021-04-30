import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ children, className, type, width, align }) => {
  console.log('Alert.jsx');
  return (
    <div
      className={`alert alert--${type} alert--${width} alert--${align} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

Alert.defaultProps = {
  type: 'primary',
  className: '',
  width: 'auto',
  align: 'left',
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  width: PropTypes.oneOf(['auto', 'full']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Alert;
