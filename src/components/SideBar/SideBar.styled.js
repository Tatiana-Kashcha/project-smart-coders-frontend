import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import { ReactComponent as CloseIcon } from '../../icons/x-close.svg';

export const SideBar = styled.aside`
  max-width: 225px;
  height: 100vh;
  padding: 24px 20px;

  background-color: ${props => props.theme.colors.thirdBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding: 32px 24px 24px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrap = styled.span`
  display: flex;
  justify-content: center;

  color: ${props => props.theme.colors.secondText};
`;

export const IconLogo = styled(LogoIcon)`
  width: 136px;
  height: 35px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 160px;
    height: 58px;

    @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
      width: 222px;
      height: 68px;
    }
  }
`;

export const IconClose = styled(CloseIcon)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 34px;
    height: 34px;
  }
`;

export const SideBarLabel = styled.p`
  margin-top: 64px;

  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.colors.sideBarLabel};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-top: 50px;

    font-size: 14px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    margin-top: 32px;
  }
`;
