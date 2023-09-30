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

export const Button = styled.button`
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
`;

export const Span = styled.span`
  font-size: 12px;
  line-height: 1.17;
  font-weight: 600;

  color: #ffffff;

  text-decoration: underline;
`;
