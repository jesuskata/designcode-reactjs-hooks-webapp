// Dependencies
import React, { useState, useEffect, useRef } from 'react';

// Components
import { MenuButtons } from '../../buttons/MenuButtons';
import { MenuTooltip } from '../../tooltips/MenuTooltip';

// Styled Components
import { Wrapper, MenuWrapper, HamburgerWrapper } from './styles';

// Data
import { menuData } from '../../../data/menuData';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  const handleClickOutside = (event) => {
    if (ref.current
      && !ref.current.contains(event.target)
      && !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleMenuClick = (event) => {
    setIsOpen(!isOpen);
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" alt="logo" />
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item) => (item.link === '/account'
          ? (
            <MenuButtons item={item} key={item.link} onClick={handleMenuClick} />
          )
          : (
            <MenuButtons item={item} key={item.link} />
          )))}
        <HamburgerWrapper>
          <MenuButtons
            item={{ title: '', icon: '/images/icons/hamburger.svg', link: '/' }}
            onClick={handleMenuClick}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
};
