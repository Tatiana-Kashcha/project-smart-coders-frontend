import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from '../MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = () => {
  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable startDay={'startDay'} />
    </div>
  );
};
