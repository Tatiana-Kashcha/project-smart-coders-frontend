import styled from 'styled-components';
import { globalTheme } from 'theme';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Close } from '../../icons/x-close.svg';

export const SideBar = styled.aside`
  position: absolute;
  left: 0;
  z-index: 1200;

  width: 225px;
  max-width: 100%;
  height: 100vh;
  max-height: 844px;
  padding: 24px 20px;

  background-color: ${props => props.theme.colors.thirdBackground};

  @media screen and (max-width: calc(${globalTheme.breakpoints
      .desktop} - 0.5px)) {
    @keyframes slidein {
      from {
        left: -100%;
      }
      to {
        left: 0;
      }
    }

    animation: slidein 250ms ${globalTheme.cubic.cubicBezier};
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    max-height: 1024px;
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    max-height: 900px;
    padding: 32px 24px 24px;
    transform: translateX(calc(100vw / 2 - 720px));
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

export const IconLogo = styled(Logo)`
  width: 136px;
  height: 35px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 160px;
    height: 58px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    width: 222px;
    height: 68px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const IconClose = styled(Close)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 34px;
    height: 34px;
  }
`;

export const SideBarLabel = styled.h2`
  margin-top: 64px;
  margin-bottom: 24px;

  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.colors.sideBarLabel};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-top: 50px;
    margin-bottom: 32px;

    font-size: 14px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    margin-top: 32px;
  }
`;
