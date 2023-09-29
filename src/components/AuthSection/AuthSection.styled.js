import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;

  height: 100vh;

  background-color: ${props => props.theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Button = styled.button`
  margin: 0 0 16px 0;

  width: 131px;
  height: 46px;

  font-size: 14px;
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.medium};

  border-radius: ${props => props.theme.radii.big};
  border: ${props => props.theme.borders.none};

  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};

  box-shadow: ${props => props.theme.shadows.boxShadow};

  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 12px;
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.medium};

  color: ${props => props.theme.colors.background};

  text-decoration: underline;
`;
