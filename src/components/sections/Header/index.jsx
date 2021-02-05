// Dependencies
import React, { useState } from 'react';

// Components
import { MenuButtons } from '../../buttons/MenuButtons';
import { MenuTooltip } from '../../tooltips/MenuTooltip';

// Styled Components
import { Wrapper, MenuWrapper, HamburgerWrapper } from './styles';

// Data
import { menuData } from '../../../data/menuData';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (event) => {
    setIsOpen(!isOpen);
    event.preventDefault();
  };

  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" alt="logo" />
      <MenuWrapper count={menuData.length}>
        {menuData.map((item) => (item.link === '/account'
          ? (
            <MenuButtons item={item} key={item.link} onClick={handleMenuClick} />
          )
          : (
            <MenuButtons item={item} key={item.link} />
          )))}
        <HamburgerWrapper>
          <MenuButtons item={{ title: '', icon: '/images/icons/hamburger.svg', link: '' }} />
        </HamburgerWrapper>
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  );
};
