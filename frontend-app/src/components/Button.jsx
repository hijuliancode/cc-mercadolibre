/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = React.memo(({ children, className, type, styleBtn, width }) => {
  console.log('Button.jsx');
  return (
    <button
      className={`btn ${styleBtn && 'btn--in-form'} ${
        width === 'full' && 'btn--full'
      } ${className}`.trim()}
      type={type}
    >
      {children}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
  styleBtn: '',
  className: '',
  width: 'auto',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  styleBtn: PropTypes.oneOf(['in-form', null]),
  width: PropTypes.oneOf(['auto', 'full']),
};

export default Button;
