import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent as Plus } from '../../icons/plus.svg';

export const TaskBtn = styled.button`
  position: absolute;
  bottom: 8px;
  width: 90%;
  max-width: 298px;

  padding: 14px 0;
  cursor: pointer;

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
    bottom: 27px;
    max-width: 302px;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
