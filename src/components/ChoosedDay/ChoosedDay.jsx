import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';

import * as s from './ChoosedDay.styled';

export const ChoosedDay = () => {
  return (
    <s.TestDiv>
      <h1>ChoosedDay містить в собі:</h1>
      <DayCalendarHead />
      <TasksColumnsList />
    </s.TestDiv>
  );
};
