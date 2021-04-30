import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../components';

const LayoutHome = ({ children }) => (
  <>
    <main className="main main--home">
      <div className="wrapper--home">
        <Box className="d-flex justify-content-center align-items-center direction-column">
          {children}
        </Box>
      </div>
    </main>
  </>
);

LayoutHome.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutHome;
