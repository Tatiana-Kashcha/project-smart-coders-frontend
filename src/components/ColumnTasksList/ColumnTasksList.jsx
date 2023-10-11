import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import * as s from './ColumnTasksList.styled';

export const ColumnTasksList = () => {
  return (
    <s.DivTasksCol>
      <TasksColumn groupTitle="To do" groupId="to-do" />
      <TasksColumn groupTitle="In progress" groupId="in-progress" />
      <TasksColumn groupTitle="Done" groupId="done" />
    </s.DivTasksCol>
  );
};
