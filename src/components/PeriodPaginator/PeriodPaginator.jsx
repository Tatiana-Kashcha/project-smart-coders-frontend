import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { useDate } from 'hooks/useDate';

import * as s from './PeriodPaginator.styled';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const [isActive, setIsActive] = useState(true);
  const { setChoosedDate } = useDate();

  useEffect(() => {
    const currentDate = new Date();

    if (
      date.setDate(date.getDate()) > currentDate.setDate(currentDate.getDate())
    ) {
      setIsActive(true);
      setChoosedDate(date);
    } else {
      setIsActive(false);
      setChoosedDate(date);
    }
  }, [date, setChoosedDate]);

  const currentMonth = dayjs(date).format('MMMM YYYY');
  const currentDay = dayjs(date).format('D MMM YYYY');

  return (
    <s.PaginatorWrapper>
      <s.DisplayData>
        {periodType === 'month' ? currentMonth : currentDay}
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
