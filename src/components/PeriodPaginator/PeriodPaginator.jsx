import dayjs from 'dayjs';

import * as s from './PeriodPaginator.styled';

export const PeriodPaginator = ({ date, periodType, upDateDate }) => {
  const currentMonth = dayjs(date).format('MMMM YYYY');
  const currentDay = dayjs(date).format('D MMM YYYY');

  return (
    <>
      <span style={{ display: 'block', backgroundColor: 'pink' }}>
        {periodType === 'month' ? currentMonth : currentDay}
      </span>
      <s.ButtonWrapper>
        <s.TestStyleButton
          type="button"
          onClick={() => {
            upDateDate(-1);
          }}
        >
          <s.ChevronLeftMod />
        </s.TestStyleButton>
        <s.TestStyleButton
          type="button"
          onClick={() => {
            upDateDate(1);
          }}
        >
          <s.ChevronRightMod />
        </s.TestStyleButton>
      </s.ButtonWrapper>
    </>
  );
};
