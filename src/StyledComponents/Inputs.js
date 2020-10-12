import styled, { css } from 'styled-components';
import theme from '../Global/theme';

export const StyledInput = styled.input`
  height: 3rem;
  border: solid 0.2rem ${theme.color.lightGray};
  color: ${theme.color.gray};
  border-radius: 0.4rem;
  background: ${theme.color.white};
  padding: 0 1.9rem;
  font-size: 1.4rem;
  font-weight: ${theme.fontWeights.normal};
  width: 60%;
  outline: none;

  margin: 1rem;
  flex-shrink: 2;

  &:focus {
    border-color: ${theme.color.primary};
    z-index: ${theme.zIndices.minimal};
  }

  &::placeholder {
    color: ${theme.color.gray};
  }
`;

export const StyledButton = styled.button`
  height: 3.4rem;
  border: none;
  color: ${theme.color.white};
  border-radius: 0.4rem;
  background: ${theme.color.black};
  padding: 0 2rem;
  font-size: 1.4rem;
  font-weight: ${theme.fontWeights.normal};
  margin: 1rem;
`;
