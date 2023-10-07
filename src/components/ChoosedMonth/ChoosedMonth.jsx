import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from '../MonthCalendarHead/MonthCalendarHead';
// import moment from 'moment';
// import { useSelector } from 'react-redux';
// import { selectTasks } from '../../redux/task/selectors';
// import { useParams } from 'react-router-dom';

export const ChoosedMonth = () => {
  // const allTasks = useSelector(selectTasks);

  // const { currentDate } = useParams();
  // const today = moment(currentDate);
  // const startDay = today.clone().startOf('month').startOf('week');
  // const totalDays = 42;
  // const startDay = moment().startOf('month').startOf('week');

  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable
        // tasks={allTasks}
        //  today={today}
        startDay={'startDay'}
      />
    </div>
  );
};
