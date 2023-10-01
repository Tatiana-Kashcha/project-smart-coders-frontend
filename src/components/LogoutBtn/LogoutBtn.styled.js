import styled from 'styled-components';
import { globalTheme } from 'theme';

export const LogButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 24px;
  width: 134px;
  padding: 14px;

  border: none;
  background: ${globalTheme.colors.primary};
  box-shadow: ${globalTheme.shadow.boxShadow};
  border-radius: 16px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: ${globalTheme.colors.white};
  cursor: pointer;

  &:disabled {
    background: ${globalTheme.colors.bgBlue};
  }

  &:hover {
    background-color: ${globalTheme.colors.secondary};
  }
`;
export const LogButtonIcon = styled.span`
  margin-left: 10px;
`;
