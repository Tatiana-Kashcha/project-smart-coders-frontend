import styled from 'styled-components';
import { ReactComponent } from '../../icons/log-out.svg';

export const LogButton = styled.button`
  display: flex;
  gap: 6px;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 24px;
  width: 131px;
  padding: 14px 0;

  border: none;
  background: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: 16px;

  font-family: 'Inter';
  /* font-style: normal; */
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;

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
  /* margin-left: 6px; */
  display: flex;
  justify-content: center;
`;

export const IconLogout = styled(ReactComponent)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

// viewBox = '0 0 18 18';
