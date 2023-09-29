import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../icons/rocket.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 47px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_mode};
`;

export const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 503px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 252px;
  }
`;

// NumberWrap
export const NumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -28px;
  font-weight: bold;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    margin-bottom: -30px;
  }
`;

// number
export const Number = styled.p`
  font-style: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    font-size: 200px;
    line-height: 1.25;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 100px;
    line-height: 1.25;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 100px;
    line-height: 1.25;
  }
`;

// svg
export const RocketStyled = styled(Rocket)`
  width: 178px;
  height: 414px;
  margin-left: -30px;
  margin-right: -30px;
  margin-bottom: -15px;

  @media screen and (min-width: 768px) {
    max-width: 367px;
    height: 445px;
  }
`;

// text below the number
export const Text = styled.p`
  font-style: ${({ theme }) => theme.fonts.text};
  /* font-weight: 400; */
  line-height: 1.1;
  text-align: center;
  font-weight: normal;

  height: 100%;

  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 24px;
  margin-top: -100px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    width: 387px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 281px;
  }
`;

// Link
export const StyledLink = styled(Link)`
  display: block;
  width: max-content;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -2%;
  font-weight: ${({ theme }) => theme.fontSizes.medium};
  margin: 0 auto;
  padding: 16px 48px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 14px 32px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
