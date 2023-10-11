import styled from 'styled-components';
import { globalTheme } from 'theme';

export const DivStyled = styled.div`
  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-left: 289px;
  }
`;

export const SectionHeader = styled.section`
  padding-top: 24px;
  padding-bottom: 64px;

  background-color: ${props => props.theme.colors.bgrSection};

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-top: 40px;
    padding-bottom: 32px;
  }
`;

export const Section = styled.section`
  height: 100vh;

  background-color: ${props => props.theme.colors.bgrSection};

  @media screen and (max-width: calc(${globalTheme.breakpoints
      .tablet} - 0.5px)) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding-bottom: 38px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-bottom: 32px;
  }
`;
