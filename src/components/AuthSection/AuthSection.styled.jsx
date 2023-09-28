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
