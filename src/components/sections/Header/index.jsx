// Dependencies
import React from 'react';

// Components
import { MenuButtons } from '../../buttons/MenuButtons';

// Styled Components
import { Wrapper, MenuWrapper } from './styles';

// Data
import { menuData } from '../../../data/menuData';

export const Header = () => (
  <Wrapper>
    <img src="/images/logos/logo.svg" alt="logo" />
    <MenuWrapper count={menuData.length}>
      {menuData.map((item) => (
        <MenuButtons item={item} key={item.link} />
      ))}
    </MenuWrapper>
  </Wrapper>
);
