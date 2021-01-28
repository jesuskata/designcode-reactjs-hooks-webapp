// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled Components
import { Wrapper, Title, SubTitle } from './styles';

export const PurchaseButton = ({ title, subtitle }) => (
  <Link to="/page-2">
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Wrapper>
  </Link>
);

PurchaseButton.defaultProps = {
  title: 'Get Pro Access',
  subtitle: '$19 per month'
};

PurchaseButton.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
