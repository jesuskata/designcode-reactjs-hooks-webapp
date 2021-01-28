// Dependencies
import styled from 'styled-components';

// TextStyles Components
import { Caption2, SmallText } from '../../../styles/TextStyles';

export const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
  box-shadow:
    0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;

export const Title = styled(Caption2)`
  color: black;
`;

export const SubTitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;
