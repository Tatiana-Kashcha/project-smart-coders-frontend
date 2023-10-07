import styled from 'styled-components';
import { globalTheme } from 'theme';

export const Toolbar = styled.div`
  width: 68px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToolbarBtn = styled.button`
  fill: ${props => props.theme.colors.primaryText};
  border: none;
  padding: 0;

  &:hover {
    fill: ${globalTheme.colors.primary};
  }
`;

export const ToolMenu = styled.div`
  width: 147px;
  height: 90px;
  display: inline-flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 24px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${props => props.theme.colors.secondBackground};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const ToolMenuBtn = styled.button`
  width: 99px;
  height: 18px;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.secondBackground};
  fill: ${props => props.theme.colors.primaryText};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  &:hover {
    fill: ${globalTheme.colors.primary};
  }
`;
