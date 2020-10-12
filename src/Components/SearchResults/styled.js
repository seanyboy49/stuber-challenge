/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import theme from '../../Global/theme';

export const SummaryWrap = styled.div`
  border: solid 0.2rem ${theme.color.lightGray};
  display: flex;
  width: 100%;
  height: 30%;
  padding: 2rem;
`;

export const EpisodeWrap = styled.div`
  border: solid 0.2rem ${theme.color.lightGray};
  padding: 2rem;
`;

export const ResultsWrap = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 70%;
`;
