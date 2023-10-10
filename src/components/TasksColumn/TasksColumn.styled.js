import styled from 'styled-components';

export const TasksCol = styled.div`
  width: 100%;
  max-height: 432px;
  padding: 18px 18px 10px 18px;

  border: 1px solid #dce3e5;
  border: ${props => props.theme.colors.userInputBorder};
  border-radius: 7px;
  background-color: ${props => props.theme.colors.secondBackground};
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
    min-width: 344px;
    max-height: 568px;
    padding: 18px 20px 28px 20px;
  }

  @media (min-width: 375px) {
    margin-top: 28px;
  }
`;

export const TasksScroll = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const DivList = styled.div`
  margin-top: 24px;

  @media (min-width: 375px) {
    margin-top: 28px;
  }
`;
