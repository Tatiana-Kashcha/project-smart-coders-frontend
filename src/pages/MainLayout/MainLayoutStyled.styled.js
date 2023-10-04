import styled from 'styled-components';
import { Container } from 'stylesheet/Container.styled';
import { globalTheme } from 'theme';

export const DivStyled = styled.div`
  padding-top: 24px;

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-top: 40px;
    padding-left: 289px;
  }
`;

export const SectionHeader = styled(Container)`
  background-color: ${props => props.theme.colors.bgrSection};
`;

export const Section = styled(Container)`
  background-color: ${props => props.theme.colors.bgrSection};
`;

export const ContainerMode = styled(Container)`
  /* background-color: ${props => props.theme.colors.bgrSection}; */
`;
