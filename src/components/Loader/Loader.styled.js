import styled from 'styled-components';

export const LoaderStyle = styled.div`
  background-color: ${props => props.theme.colors.secondBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* margin-top: 20px; */
`;
