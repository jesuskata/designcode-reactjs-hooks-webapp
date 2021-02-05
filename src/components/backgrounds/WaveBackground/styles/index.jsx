// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Wave = styled.img`
  position: absolute;
  z-index: -1;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
  z-index: -1;
`;
