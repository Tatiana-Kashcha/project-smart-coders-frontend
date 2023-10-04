import styled from 'styled-components';

import { globalTheme } from 'theme';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: ${globalTheme.breakpoints.mobile}) {
    width: ${globalTheme.breakpoints.mobile};
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: ${globalTheme.breakpoints.tablet};
    padding: 0 32px; //!add padding
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    width: ${globalTheme.breakpoints.desktop};
  }
`;
