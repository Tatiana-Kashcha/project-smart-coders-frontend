import styled from 'styled-components';
import { globalTheme } from 'theme';

export const DivStyled = styled.div`
  /* padding-top: 24px; //! */

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    /* padding-top: 40px; //! */
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
    /* padding-left: 289px; */ //!
  }
`;

export const Section = styled.section`
  background-color: ${props => props.theme.colors.bgrSection};

  @media screen and (max-width: calc(${globalTheme.breakpoints
      .tablet} - 0.5px)) {
    padding-top: 31px;
    padding-bottom: 40px;
  } //! add padding

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding-bottom: 38px;
  } //! add padding

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding-bottom: 32px;
  } //! add padding
`;
