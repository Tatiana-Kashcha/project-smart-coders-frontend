import styled from 'styled-components';

export const LogButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 24px;
  width: 134px;
  padding: 14px;

  border: none;
  background: var(--primary);
  box-shadow: var(--boxShadow);
  border-radius: 16px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  color: var(--white);
  cursor: pointer;

  &:disabled {
    background: var(--bg-blue);
  }

  &:hover {
    background-color: var(--secondary);
  }
`;
export const LogButtonIcon = styled.span`
  margin-left: 10px;
`;
