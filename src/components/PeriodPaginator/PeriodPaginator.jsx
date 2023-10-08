import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import * as s from './PeriodPaginator.styled';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const [isActive, setIsActive] = useState(true);

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
          <s.ChevronLeftMod isActive={isActive} />
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
