// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled Components
import {
  Wrapper, IconWrapper, Icon, Ring, TextWrapper, Title, SubTitle
} from './styles';

export const PurchaseButton = ({ title, subtitle }) => (
  <Link to="/page-2">
    <Wrapper>
      <IconWrapper>
        <Icon src="/images/icons/credit.svg" className="icon" />
        <Ring src="/images/icons/icon-ring.svg" />
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TextWrapper>
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
