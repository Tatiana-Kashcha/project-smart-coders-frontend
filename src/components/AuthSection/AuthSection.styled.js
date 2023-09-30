import styled from 'styled-components';

import { Container } from 'stylesheet/Container.styled';

export const Section = styled.section`
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.primary};
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
  @media (max-width: (${({ theme }) => theme.breakpoints.tablet}-0.5px)) {
    width: 142px;
    height: 142px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 150px;
    height: 149px;
  }
`;

export const Button = styled.button`
  margin: 0 0 16px 0;

  width: 131px;
  height: 46px;

  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  border-radius: ${({ theme }) => theme.radii.big};
  border: ${({ theme }) => theme.borders.none};

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};

  box-shadow: ${({ theme }) => theme.shadows.boxShadow};

  cursor: pointer;
`;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  color: ${({ theme }) => theme.colors.background};

  text-decoration: underline;
`;
