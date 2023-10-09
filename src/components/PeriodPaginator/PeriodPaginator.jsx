import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import * as s from './PeriodPaginator.styled';
import { StyleSheetManager } from 'styled-components';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const [isActive, setIsActive] = useState(true);
  const [calendarOrStatistic, setCalendarOrStatistic] = useState('calendar');
  const { currentDate, currentDay } = useParams();

  const currentMonth = dayjs(date).format('MMMM YYYY');
  const currentDayNow = dayjs(date).format('D MMM YYYY');

  useEffect(() => {
    const currentDate = new Date();

    if (
      date.setDate(date.getDate()) > currentDate.setDate(currentDate.getDate())
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [date]);

  useEffect(() => {
    if (currentDate || currentDay) {
      setCalendarOrStatistic('calendar');
    } else {
      setCalendarOrStatistic('statistic');
    }
  }, [currentDate, currentDay]);

  return (
    <StyleSheetManager
      shouldForwardProp={prop => prop !== 'calendarorstatistic'}
    >
      <s.PaginatorWrapper calendarorstatistic={calendarOrStatistic}>
        <s.DisplayData>
          {periodType === 'month' ? currentMonth : currentDayNow}
        </s.DisplayData>
        <s.ButtonWrapper>
          <s.ButtonLeft
            type="button"
            disabled={!isActive}
            onClick={() => {
              upDateDate(-1);
            }}
          >
            <s.ChevronLeftMod />
          </s.ButtonLeft>
          <s.ButtonRight
            type="button"
            onClick={() => {
              upDateDate(1);
            }}
          >
            <s.ChevronRightMod />
          </s.ButtonRight>
        </s.ButtonWrapper>
      </s.PaginatorWrapper>
    </StyleSheetManager>
  );
};
