/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import theme from '../../Global/theme';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 2px -2px ${theme.color.gray};
  align-items: center;
  z-index: ${theme.zIndices.minimal};
`;

export const TitleWrap = styled.div`
  flex-grow: 3;
  text-align: center;
`;
