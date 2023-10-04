import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

export const CalendarToolbar = ({ switchMonthOrDay }) => {
  return (
    <section>
      <h1>CalendarToolbar в середні якого:</h1>
      <PeriodPaginator />
      <PeriodTypeSelect switchMonthOrDay={switchMonthOrDay} />
    </section>
  );
};
