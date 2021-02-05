// Dependencies
import styled from 'styled-components';

// Styled Components
import { H1, MediumText } from '../../../styles/TextStyles';
import { themes } from '../../../styles/ColorStyles';

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
`;

export const Title = styled(H1)`
  color: ${themes.dark.text1};
`;

export const Description = styled(MediumText)``;
