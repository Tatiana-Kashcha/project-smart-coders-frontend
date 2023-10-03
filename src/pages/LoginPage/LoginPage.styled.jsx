import styled from 'styled-components';
import { globalTheme } from 'theme';

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
    position: absolute;
    width: 368px;
    height: 521px;
    bottom: 19px;
    right: 60px;
  }
`;
