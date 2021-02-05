// Dependencies
import styled, { keyframes } from 'styled-components';

// Styled Components
import { H1, MediumText } from '../../../styles/TextStyles';
import { themes } from '../../../styles/ColorStyles';

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`;

export const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }

    :nth-child(2) {
      animation-delay: 0.2s;
    }

    :nth-child(3) {
      animation-delay: 0.5s;
    }
  }
`;

export const Title = styled(H1)`
  color: ${themes.dark.text1};
`;

export const Description = styled(MediumText)``;
