// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Header } from '../sections/Header';

// Styles
import './layout.css';
import { GlobalStyles } from '../styles/GlobalStyles';

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any)
};
