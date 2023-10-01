import styled from 'styled-components';

export const ThemeToggleBtn = styled.button`
  margin-right: 14px;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    fill: #3e85f3;
  }

  @media screen and (min-width: 678px) {
    width: 32px;
    height: 32px;
  }
`;
