import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent as Plus } from '../../icons/plus.svg';

export const TaskBtn = styled.button`
  position: absolute;
  bottom: 10px;
  padding: 14px 100px;

  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.addTaskBgBtn};
  border: 1px dashed ${globalTheme.colors.primary};

  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    bottom: 28px;
    padding: 14px 104px;
  }
`;

export const PlusIcon = styled(Plus)`
  fill: ${globalTheme.colors.closeButton};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
