/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, local, src, alt, height, width }) => {
  console.log('Image.jsx, src, alt', src, alt);
  return (
    <picture className={`image ${className}`.trim()} style={{ height, width }}>
      <img
        // eslint-disable-next-line global-require
        src={local ? require(`../images/${src}`).default : src}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
};

Image.defaultProps = {
  className: '',
  local: true,
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number.isRequired,
  local: PropTypes.bool,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Image;
