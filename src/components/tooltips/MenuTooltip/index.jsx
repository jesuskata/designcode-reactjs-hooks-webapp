// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { MenuButtons } from '../../buttons/MenuButtons';

// Styled Components
import { Wrapper } from './styles';

// Data
import { tooltipData } from '../../../data/menuData';

export const MenuTooltip = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    {tooltipData.map(item => (
      <MenuButtons item={item} key={item.link} />
    ))}
  </Wrapper>
);

MenuTooltip.propTypes = {
  isOpen: PropTypes.bool
};
