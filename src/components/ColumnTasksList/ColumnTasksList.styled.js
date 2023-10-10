import styled from 'styled-components';

export const DivTasksCol = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;

  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 27px;
  }

  /* width: 100%;
  padding: 18px 18px 10px 18px;

  border: 1px solid #dce3e5;
  border: ${props => props.theme.colors.userInputBorder};
  border-radius: 7px;
  background-color: ${props => props.theme.colors.secondBackground};

  @media (min-width: 768px) {
    width: 344px;
    padding: 18px 20px 28px 20px;
  }

  @media (min-width: 375px) {
    margin-top: 28px;
  } */
`;
