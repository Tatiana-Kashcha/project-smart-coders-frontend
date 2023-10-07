import styled from 'styled-components';
import { globalTheme } from 'theme';

export const TaskBtn = styled.button`
  color: ${globalTheme.colors.closeButton};
  background-color: ${props => props.theme.colors.backgroundButton};
  border: 1px dashed ${globalTheme.colors.primary};
  width: 100%;
  border-radius: 8px;
  padding: 14px 0 14px;
  font-weight: bold;
  font-size: 14px;

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
