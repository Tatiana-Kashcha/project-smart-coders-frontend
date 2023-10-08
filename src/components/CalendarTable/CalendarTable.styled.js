import styled from 'styled-components';

// зовнішній контур
export const CalendarGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  max-width: 767px;
  max-height: 625px;
  margin: 0 auto;
  height: 470px;
  border: ${({ theme }) => theme.colors.userInputBorder}; //border
  color: ${({ theme }) => theme.colors.calendarText}; //циферки
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props =>
    props.isWeekend ? 'opacity = 0,3 ' : 'inherit'};
  /* background-color: inherit; */
  /* background-color: inherit; */

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: calc(100vh - 280px);
  }

  @media screen and (min-width: 1440px) {
    max-width: 1087px;
    height: calc(100vh - 270px);
  }

  /* transition-property: all; */
  transition-duration: 100ms;
  transition-timing-function: linear;
  :focus,
  :hover {
    transform: scale(1.05);
    z-index: 1;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
    /* background-color: blue; */
  }
`;

export const RowInCell = styled.div`
  display: flex;
  /* margin: 4px 8px; */
  @media screen and (min-width: 1440px) {
    /* margin: 14px 14px; */
  }
  .current-day {
    background-color: #ffcccb; /* Цвет фона для текущей даты */
    font-weight: bold; /* Жирный шрифт для текущей даты */
    color: #ff0000; /* Цвет текста для текущей даты */
  }
`;

export const CellWrapper = styled.div`
  //циферки
  display: flex;
  margin-bottom: 0px;
  padding: 8px 4px;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.bgrCalendar};
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`;
// клітинка-дні

export const CalendarTableCell = styled(CellWrapper)`
  // Добавьте стили для выделения текущей даты
  background-color: #ffcccb; /* Цвет фона для текущей даты */
  font-weight: bold; /* Жирный шрифт для текущей даты */
  color: #ff0000; /* Цвет текста для текущей даты */
`;

export const DayWrapper = styled.div`
  width: 24px;
  height: 26px;
  /* margin: 6px; */
  /* margin: 4px 6px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* margin-right: 2px; */

  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;

  color: ${({ theme }) => theme.colors.primaryText};
  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: 16px;
    line-height: 1.12;
    margin-right: 10px;
  }
  animation: scaleAnimation 1s linear infinite alternate;
`;

export const CurrentDay = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  color: ${({ theme }) => theme.colors.white};

  align-items: center;
  justify-content: center;
  padding: 4px 8px;

  background: ${({ theme }) => theme.colors.primaryText};
  border-radius: 50%;
  :focus,
  :hover {
    transform: scale(1.05);
    z-index: 1;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
    background-color: blue;
  }

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;

    font-size: ${props => props.theme.fontSizes.s};
    line-height: ${props => props.theme.lineHeights.heading};
  }
`;

export const HiddenTaskCount = styled.span`
  color: green;
  position: absolute;
  left: 2px;
  top: 15px;
  font-style: italic;
  font-size: 10px;
  line-height: 1.4;
  font-weight: 600;

  @media (min-width: 768px) {
    left: 2px;
    top: 20px;

    font-size: 14px;
    line-height: 1.29;
  }

  @media (min-width: 1440px) {
    left: 4px;
    top: 25px;
  }
`;
