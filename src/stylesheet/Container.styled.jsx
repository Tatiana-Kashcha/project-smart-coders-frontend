import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  background-color: teal;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: ${props => props.theme.breakpoints.table};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.breakpoints.desktop};
  }
`;
