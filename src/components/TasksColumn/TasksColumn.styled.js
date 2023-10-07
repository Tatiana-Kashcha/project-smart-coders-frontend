import styled from 'styled-components';

export const TasksCol = styled.div`
  max-width: 299px;
  padding: 18px 18px 10px 18px;
  border: 1px solid #dce3e5;
  border: ${props => props.theme.colors.userInputBorder};
  border-radius: 7px;
  background-color: ${props => props.theme.colors.secondBackground};

  @media (min-width: 768px) {
    max-width: 344px;
    padding: 18px 20px 28px 20px;
  }
`;

export const DivList = styled.div`
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 28px;
  }
`;
