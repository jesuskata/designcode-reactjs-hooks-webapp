// Dependencies
import React from 'react';

// Styled Components
import { Wrapper, Wave, Background } from './styles';

export const WaveBackground = () => (
  <Wrapper>
    <Background />
    <Wave src="/images/waves/wave1.png" style={{ top: '0px' }} />
    <Wave src="/images/waves/hero-wave2.svg" style={{ top: '350px' }} />
    <Wave src="/images/waves/hero-wave3.svg" style={{ top: '550px' }} />
  </Wrapper>
);
