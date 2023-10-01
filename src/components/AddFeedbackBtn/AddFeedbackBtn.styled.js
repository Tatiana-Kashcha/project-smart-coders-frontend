import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  display: inline-block;
  margin-right: 24px;
  padding: 12px 32px;
  border-radius: 14px;
  border: none;

  background-color: var(--green-valid);

  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;

  @media screen and (min-width: 678px) {
    font-size: 14px;
  }
`;
