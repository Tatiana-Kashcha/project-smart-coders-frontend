import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';

export const TasksColumnsList = () => {
  return (
    <>
      <h1>
        TasksColumnsList - блок з трьома колонками списків завданнь -
        TasksColumn (To do | In progress | Done). На мобільній та планшетній
        версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина
        екрану пристрою юзера.
      </h1>
      <TaskToolbar />
    </>
  );
};
