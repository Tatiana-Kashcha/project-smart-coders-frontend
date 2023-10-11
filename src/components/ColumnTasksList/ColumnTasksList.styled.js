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
    margin-bottom: -30px;
    padding-bottom: 40px;

    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.bgScrollColor};
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollColor};
      border-radius: 12px;
      height: 12px;
    }
  }
`;
