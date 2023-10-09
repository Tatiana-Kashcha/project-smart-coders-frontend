import { TasksColumn } from 'components/TasksColumn/TasksColumn';

export const ColumnTasksList = () => {
  return (
    <>
      <TasksColumn groupTitle="in-progress" groupId="123" />
      <TasksColumn groupTitle="to-do" groupId="123" />
      <TasksColumn groupTitle="done" groupId="123" />
    </>
  );
};
