import styled from 'styled-components';
import { globalTheme } from 'theme';

export const ThemeToggleBtn = styled.button`
  margin-right: 8px;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    fill: #3e85f3;
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-right: 14px;
    width: 32px;
    height: 32px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
