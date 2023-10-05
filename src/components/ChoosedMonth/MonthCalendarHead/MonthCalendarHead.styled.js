import styled from 'styled-components';

export const StyledHead = styled.ul`
  display: flex;
  justify-content: space-around;

  padding: 14px 0px;

  border: ${({ theme }) => theme.colors.calendarOutBorder};
  border-radius: 8px;
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme.colors.bgrCalendar}; //

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;
export const StyledItem = styled.li`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 16px;

  color: ${props =>
    props.item === 'SAT' || props.item === 'SUN'
      ? '#3e85f3'
      : props.theme.colors.calendarText};

  /* calendarText  */
  .full-name {
    display: block;
  }
  .short-name {
    display: none;
  }

  @media (max-width: 480px) {
    .full-name {
      display: none;
    }

    .short-name {
      display: block;
    }
  }
`;
