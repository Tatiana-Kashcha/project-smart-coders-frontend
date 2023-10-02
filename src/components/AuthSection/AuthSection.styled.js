import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as StartGoose } from '../../icons/start-goose.svg';

import { ReactComponent as LogIn } from '../../icons/log-in.svg';

import { globalTheme } from 'theme';
import { Container } from 'stylesheet/Container.styled';

export const Section = styled.section`
  height: 100vh;

  background-color: ${globalTheme.colors.primary};
`;

export const ContainerModific = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const StartGooseIcon = styled(StartGoose)`
  flex-shrink: 0;

  @media screen and (max-width: ${globalTheme.breakpoints.tablet}) {
    width: 142px;
    height: 142px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 150px;
    height: 149px;
  }
`;

export const TextH1 = styled.h1`
  margin: 0 0 32px 0;

  font-size: 44px;
  line-height: 1.09;
  font-weight: 700;

  color: ${globalTheme.colors.white};

  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 0 40px 0;

    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const SecondLetterO = styled.span`
  margin: 0 6px 0 0;
  font-style: italic;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 10px 0 0;
  }
`;

export const FirstLetterO = styled.span`
  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 6px 0 0;
    font-style: italic;
  }
`;

export const NavStyled = styled.nav`
  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin: 0 0 16px 0;

  padding: 14px 33.5px;

  width: 131px;
  height: 46px;

  font-size: 14px;
  line-height: 1.28;
  font-weight: 600;
  letter-spacing: -0.28px;

  border-radius: 16px;

  color: ${globalTheme.colors.primary};
  background-color: ${globalTheme.colors.background};

  box-shadow: ${globalTheme.shadow.boxShadow};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 0 0 24px;

    padding: 15.5px 28.5px;

    width: 121px;
    height: 49px;
  }
`;

export const LogInText = styled.span`
  margin: 0 6px 0 0;
`;

export const LogInIcon = styled(LogIn)`
  width: 18px;
  height: 18px;
`;

export const SignUpLink = styled(Link)`
  font-size: 12px;
  line-height: 1.16;
  font-weight: 600;

  color: ${globalTheme.colors.background};

  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  text-decoration: underline;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    flex-shrink: 0;
    font-size: 14px;
    line-height: 1.28;
  }
`;
