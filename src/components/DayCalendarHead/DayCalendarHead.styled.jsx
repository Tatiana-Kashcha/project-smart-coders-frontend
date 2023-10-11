import styled from 'styled-components';

export const StyledHead = styled.ul`
  display: flex;

  justify-content: space-between;
`;
export const ContainerDay = styled.div`
  display: block;
  width: 335px;
  height: 74px;
  padding: 14px 18px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;
  margin-bottom: 14px;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 0px;
  background-color: ${({ theme }) => theme.colors.bgrCalendar};
  border: ${({ theme }) => theme.colors.calendarOutBorder};

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 68px;
    padding: 10px 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 10px 46px;
  }
`;
/*буковки*/

export const StyledItem = styled.li`
  font-family: 'Inter';

  font-size: 16px;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.calendarText};

  /* calendarText  */
  .full-name {
    display: none;
  }

  .short-name {
    display: block;
  }

  @media (min-width: 768px) {
    .full-name {
      display: block;
    }

    .short-name {
      display: none;
    }
  }
`;
