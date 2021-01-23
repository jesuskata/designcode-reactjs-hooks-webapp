// Dependecies
import React from 'react';
// import { Link } from 'gatsby';

// Styled Components
import {
  Wrapper,
  ContentWrapper,
  TextWrapper,
  Title,
  Description
} from './styles';

export const HeroSection = () => (
  <Wrapper>
    <ContentWrapper>
      <TextWrapper>
        <Title>
          Design
          <br />
          and code ReactJS apps
        </Title>
        <Description>
          Don’t skip design. Learn design and code, by building real apps, collaborate and solving product UI problems.
        </Description>
      </TextWrapper>
    </ContentWrapper>
  </Wrapper>
);
