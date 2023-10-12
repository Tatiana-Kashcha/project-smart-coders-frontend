import styled from 'styled-components';
import { globalTheme } from 'theme';

export const TasksCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 434px;
  min-width: 100%;
  max-width: 335px;
  margin-top: 14px;
  padding: 18px 18px 10px;

  border: ${props => props.theme.colors.userInputBorder};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.secondBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    min-width: 344px;

    height: 664px;
    margin-top: 16px;
    padding: 18px 20px 28px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    max-width: 344px;
    height: 584px;
  }
`;

export const TasksScroll = styled.ul`
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const TasksScrollItem = styled.li`
  &:last-child {
    margin-bottom: 74px;
  }
`;
