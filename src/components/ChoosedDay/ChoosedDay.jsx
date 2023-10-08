import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
// import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';
import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import { ChoosedDayDivStyled } from 'components/ChoosedDay/ChoosedDayStyled.styled';

export const ChoosedDay = () => {
  return (
    <>
      <h1>ChoosedDay містить в собі:</h1>
      <DayCalendarHead />
      <ChoosedDayDivStyled>
        <TasksColumn groupTitle="in-progress" groupId="123" />
        <TasksColumn groupTitle="to-do" groupId="123" />
        <TasksColumn groupTitle="done" groupId="123" />
      </ChoosedDayDivStyled>
    </>
  );
};
// to-do
// done
