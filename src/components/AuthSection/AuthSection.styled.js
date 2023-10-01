import styled from 'styled-components';

import { Container } from 'stylesheet/Container.styled';

export const Section = styled.section`
  height: 100vh;

  background-color: #3e85f3;
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

  color: #ffffff;

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

export const Button = styled.button`
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
  border: none;

  color: #3e85f3;
  background-color: #ffffff;

  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin: 0 0 0 30px;

    width: 121px;
    height: 49px;
  }
`;

export const SpanLogIn = styled.span`
  margin: 0 10px 0 0;
`;

export const LogInWrapper = styled.div`
  width: 13.5px;
  height: 13.5px;
`;

export const SpanSignUp = styled.span`
  font-size: 12px;
  line-height: 1.17;
  font-weight: 600;

  color: #ffffff;

  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
