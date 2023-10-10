import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import * as s from './ColumnTasksList.styled';

export const ColumnTasksList = () => {
  return (
    <s.DivTasksCol>
      <TasksColumn groupTitle="To do" groupId="123" />
      <TasksColumn groupTitle="In progress" groupId="123" />
      <TasksColumn groupTitle="Done" groupId="123" />
    </s.DivTasksCol>
  );
};
