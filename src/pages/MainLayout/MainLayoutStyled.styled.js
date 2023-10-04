import styled from 'styled-components';
import { globalTheme } from 'theme';

export const DivStyled = styled.div`
  /* display: flex; */ //!
  padding-top: 24px;

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-top: 40px;
    padding-left: 289px;
  }
`;
