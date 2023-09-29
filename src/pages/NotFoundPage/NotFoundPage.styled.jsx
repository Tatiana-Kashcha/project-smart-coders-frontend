import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../icons/rocket.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  height: 250px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 387px;
  }
  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    width: 387px;
  } */
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
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    font-size: 200px;
    line-height: 1.25;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 200px;
    line-height: 1.5;
  }
`;
// svg
export const RocketStyled = styled(Rocket)`
  width: 178px;
  height: 414px;
  margin-left: -30px;
  margin-right: -30px;
  margin-bottom: -30px;

  @media screen and (min-width: 768px) {
    max-width: 367px;
    height: 445px;

    /* margin-left: -50px;
    margin-right: -50px; */
  }
`;
// text below the number
export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  line-height: 1.1;
  text-align: center;

  /* font-weight: 500; */
  font-family: ${({ theme }) => theme.fonts.text};
  /* line-height: ${({ theme }) => theme.fontSizes.s}; */

  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  /* opacity: 0.7; */
  margin-bottom: 24px;
  /* margin-left: auto;
  margin-right: auto; */
  margin-top: -80px;
  width: 281px;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    width: 387px;
    margin-bottom: 32px;
    margin-top: -100px;
    margin-left: -30px;
    margin-right: -30px;
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
  /* transition: ${({ theme }) => theme.colors.defaultTransition}; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.table}) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
