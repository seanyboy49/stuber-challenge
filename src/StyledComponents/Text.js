/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import theme from '../Global/theme';

export const Text = styled.div`
  font-size: 1.4rem;
  color: ${theme.color.newGray};
  margin: 0;
  line-height: 2.4rem;
  display: inline-block;

  ${p =>
    p.small &&
    css`
      font-size: 1rem;
    `};

  ${p =>
    p.title &&
    css`
      font-size: 3rem;
    `};
`;
