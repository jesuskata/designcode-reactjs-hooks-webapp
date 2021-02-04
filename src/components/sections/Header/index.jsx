// Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Styled Components
import { Wrapper, MenuWrapper, MenuItem } from './styles';

// Data
import { menuData } from '../../../data/menuData';

export const Header = () => (
  <Wrapper>
    <img src="/images/logos/logo.svg" alt="logo" />
    <MenuWrapper>
      {menuData.map((item, index) => (
        <Link to={item.link} key={item.title}>
          <MenuItem>
            <img src={item.icon} alt={item.title} />
            {item.title}
          </MenuItem>
        </Link>
      ))}
    </MenuWrapper>
  </Wrapper>
);
