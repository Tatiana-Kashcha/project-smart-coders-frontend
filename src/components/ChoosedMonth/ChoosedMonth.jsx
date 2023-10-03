import { CalendarTable } from 'components/CalendarTable/CalendarTable';
import { MonthCalendarHead } from 'components/MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = () => {
  return (
    <section>
      <h1>ChoosedMonth містить в собі:</h1>
      <MonthCalendarHead />
      <CalendarTable />
    </section>
  );
};
