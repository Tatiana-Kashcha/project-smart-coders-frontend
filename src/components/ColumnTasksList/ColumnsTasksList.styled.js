import styled from 'styled-components';
// import { globalTheme } from 'theme';

export const CardList = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  padding-top: 28px;

  & > div:not(:last-child) {
    margin-bottom: 18px;
  }
`;
