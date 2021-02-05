// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Styled Components
import { MenuItem } from './styles';

export const MenuButtons = ({ item, onClick }) => (
  <Link to={item.link} onClick={onClick}>
    <MenuItem title={item.title}>
      <img src={item.icon} alt={item.title} />
      {item.title}
    </MenuItem>
  </Link>
);

MenuButtons.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func
};
