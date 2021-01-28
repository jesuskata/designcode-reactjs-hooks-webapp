// Dependecies
import React from 'react';

// Components
import { PurchaseButton } from '../../buttons/PurchaseButton';

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
        <PurchaseButton
          title="Start learning"
          subtitle="120+ hours of video"
        />
      </TextWrapper>
    </ContentWrapper>
  </Wrapper>
);
