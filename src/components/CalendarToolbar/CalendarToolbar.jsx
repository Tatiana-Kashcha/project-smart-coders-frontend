import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';

export const CalendarToolbar = ({ switchMonthOrDay }) => {
  return (
    <s.TestDiv>
      <h1>CalendarToolbar в середні якого:</h1>
      <PeriodPaginator />
      <PeriodTypeSelect switchMonthOrDay={switchMonthOrDay} />
    </s.TestDiv>
  );
};
