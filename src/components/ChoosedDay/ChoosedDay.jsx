import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';

export const ChoosedDay = () => {
  return (
    <section>
      <h1>ChoosedDay містить в собі:</h1>
      <DayCalendarHead />
      <TasksColumnsList />
    </section>
  );
};
