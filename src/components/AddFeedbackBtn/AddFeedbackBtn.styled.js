import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  display: inline-block;
  margin-right: 18px;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;

  background-color: var(--green-valid);

  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;

  @media screen and (min-width: 678px) {
    padding: 12px 32px;
    margin-right: 24px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.28;
  }
`;
