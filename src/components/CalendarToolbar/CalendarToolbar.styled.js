import styled from 'styled-components';

import { globalTheme } from '../../theme';

export const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 0 24px 0;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    flex-direction: row;

    margin: 0 0 32px 0;
  }
`;
