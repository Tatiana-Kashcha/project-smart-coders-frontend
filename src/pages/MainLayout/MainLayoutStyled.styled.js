import styled from 'styled-components';
import { globalTheme } from 'theme';

export const DivStyled = styled.div`
  /* display: flex; */

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-left: 289px;
  }
`;
