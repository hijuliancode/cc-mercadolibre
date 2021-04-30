import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../../components/shared/Footer';
import { Header } from '../../components/shared/Header';

const LayoutInternal = ({ children }) => (
  <>
    <Header />
    <main className="main d-flex pt-8 pb-8">{children}</main>
    <Footer />
  </>
);

LayoutInternal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutInternal;
