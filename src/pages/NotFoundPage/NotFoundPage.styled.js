import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../icons/rocket.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 50;
  left: 50;
  padding: 47px;
  width: 100%;
  height: 100%;

  /* top: 0;
  left: 0; */

  background-color: ${props => props.theme.colors.thirdBackground};
`;

export const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 803px;
`;

// NumberWrap
export const NumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -28px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

// number
export const Number = styled.p`
  font-size: 100px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--primary);

  @media screen and (min-width: 768px) {
    font-size: 200px;
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
    width: 367px;
    height: 445px;
  }
`;

// text below the number
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  text-align: center;
  font-weight: normal;

  height: 100%;

  color: ${props => props.theme.colors.primaryText};

  margin-bottom: 24px;
  margin-top: -100px;
  margin-left: auto;
  margin-right: auto;
  width: 281px;

  @media screen and (min-width: 768px) {
    width: 387px;
    margin-bottom: 32px;
  }
`;

// Link
export const StyledLink = styled(Link)`
  display: block;
  width: max-content;
  font-family: var(--fonts-text);
  letter-spacing: -2%;
  font-weight: 600;

  padding: 14px 32px;
  font-size: 18px;
  line-height: 1.33;

  margin: 0 auto;

  border-radius: 16px;
  background-color: var(--primary);
  color: var(--white);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  &:hover {
    background-color: var(--secondary);
    box-shadow: var(--boxShadow);

    @media screen and (min-width: 768px) {
      padding: 16px 48px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;
