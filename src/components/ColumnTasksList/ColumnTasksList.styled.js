import styled from 'styled-components';
import { globalTheme } from 'theme';

export const DivTasksCol = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 0;

  @media (min-width: ${globalTheme.breakpoints.desktop}) {
    gap: 27px;
  }

  @media screen and (max-width: calc(${globalTheme.breakpoints
      .desktop} - 0.5px)) {
    /* overflow-y: hidden; */
    /* overflow-x: scroll; */
    /* scroll-behavior: smooth; */
  }
`;
