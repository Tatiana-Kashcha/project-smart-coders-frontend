import styled from 'styled-components';
import { globalTheme } from 'theme';

export const TaskBtn = styled.button`
  color: ${globalTheme.colors.closeButton};
  background-color: ${props => props.theme.colors.backgroundButton};
  border: 1px dashed ${globalTheme.colors.primary};
  border-radius: 8px;
  padding: 14px 103.5px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PlusIcon = styled.svg`
  fill: ${globalTheme.colors.closeButton};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
