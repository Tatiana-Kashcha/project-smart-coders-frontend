import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const ImgWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 142px;
    height: 142px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;

export const TextH1 = styled.h1`
  margin: 0 0 32px 0;

  font-size: 44px;
  line-height: 1.09;
  font-weight: 700;
  font-style: italic;

  color: ${globalTheme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const NavStyled = styled.nav`
  @media screen and (min-width: 768px) {
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

  margin: 0 0 16px 0;

  width: 131px;
  height: 46px;

  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;

  border-radius: 16px;

  color: ${globalTheme.colors.primary};
  background-color: ${globalTheme.colors.background};

  box-shadow: ${globalTheme.shadow.boxShadow};

  @media screen and (min-width: 768px) {
    margin: 0 0 0 30px;

    width: 121px;
    height: 49px;
  }
`;

export const LogInText = styled.span`
  margin: 0 10px 0 0;
`;

export const LogInIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13.5px;
  height: 13.5px;
`;

export const SignUpLink = styled(Link)`
  font-size: 12px;
  line-height: 1.17;
  font-weight: 600;

  color: ${globalTheme.colors.background};

  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
