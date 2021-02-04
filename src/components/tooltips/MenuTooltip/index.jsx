// Dependencies
import React, { useState } from 'react';

// Components
import { MenuButtons } from '../../buttons/MenuButtons';

// Styled Components
import { Wrapper } from './styles';

// Data
import { tooltipData } from '../../../data/menuData';

export const MenuTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {tooltipData.map(item => (
        <MenuButtons item={item} key={item.link} />
      ))}
    </Wrapper>
  );
};
