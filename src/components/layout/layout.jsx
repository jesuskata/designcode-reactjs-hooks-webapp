// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './layout.css';

export const Layout = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any)
};
