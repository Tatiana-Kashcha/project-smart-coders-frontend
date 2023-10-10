import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import * as s from './ColumnTasksList.styled';

export const ColumnTasksList = () => {
  return (
    <s.DivTasksCol>
      <TasksColumn groupTitle="to-do" groupId="123" />
      <TasksColumn groupTitle="in-progress" groupId="123" />
      <TasksColumn groupTitle="done" groupId="123" />
    </s.DivTasksCol>
  );
};
