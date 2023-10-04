import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent } from '../../icons/log-out.svg';

export const LogoutButton = styled.button`
  display: flex;
  gap: 6px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 24px;

  width: 131px;
  padding: 14px 0;

  border: none;

  background: ${globalTheme.colors.primary};
  box-shadow: ${globalTheme.shadow.boxShadow};
  border-radius: 16px;

  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;

  color: ${globalTheme.colors.white};
  cursor: pointer;

  /* &:disabled {
    background: ${globalTheme.colors.bgBlue};
  } */ //??

  &:hover {
    background-color: ${globalTheme.colors.secondary};
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    gap: 11px;

    width: 141px;
    padding: 16px 0;

    font-size: 18px;
    line-height: calc(24 / 18);
    letter-spacing: -0.36px;
  }
`;

export const IconWrap = styled.span`
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
