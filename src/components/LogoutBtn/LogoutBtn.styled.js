import styled from 'styled-components';

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
  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: 16px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:disabled {
    background: ${props => props.theme.colors.bgBlue};
    
  }

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
export const LogButtonIcon = styled.span`
  margin-left: 10px;
`;

