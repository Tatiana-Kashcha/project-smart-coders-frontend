import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import * as s from './PeriodPaginator.styled';
import { useParams } from 'react-router-dom';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const [isActive, setIsActive] = useState(true);
  const [calendarOrStatistic, setCalendarOrStatistic] = useState(true);
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
      setCalendarOrStatistic(true);
    } else {
      setCalendarOrStatistic(false);
    }
  }, [currentDate, currentDay]);

  return (
    <s.PaginatorWrapper calendarOrStatistic={calendarOrStatistic}>
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
  );
};
