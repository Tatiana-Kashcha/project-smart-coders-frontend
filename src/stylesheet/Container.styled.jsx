import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  background-color: tomato;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => props.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.breakpoints.desktop};
  }
`;
