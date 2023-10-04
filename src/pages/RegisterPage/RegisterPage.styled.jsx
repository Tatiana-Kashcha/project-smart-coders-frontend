import styled from 'styled-components';
import { globalTheme } from 'theme';
// import { Container } from 'stylesheet/Container.styled';

export const Section = styled.section`
  height: 100vh;
`;

// export const ContainerModific = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   height: 100%;
// `;

export const AuthContainer = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${globalTheme.colors.bgBlue};
`;

export const AuthImageContainer = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 400px;
    height: 416px;
    position: absolute;
    bottom: 0;
    left: 49px;
  }
`;
