import React from 'react';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnTasksList from './ColumnTasksList';
import AddTaskBtn from './AddTaskBtn';

export const TasksColumn = ({ groupTitle, tasks, groupId }) => {
  return (
    <div>
      <ColumnHeadBar title={groupTitle} columnId={groupId} />
      <ColumnTasksList tasks={tasks} />
      <AddTaskBtn groupId={groupId} />
    </div>
  );
};

