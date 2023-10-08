import React from 'react';
import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
// import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import * as s from './TasksColumn.styled';

export const TasksColumn = ({ groupTitle, tasks, groupId }) => {
  return (
    <s.TasksCol>
      <ColumnHeadBar title={groupTitle} columnId={groupId} />
      <s.DivList>{/* <ColumnTasksList tasks={tasks} /> */}</s.DivList>

      <AddTaskBtn groupId={groupId} />
    </s.TasksCol>
  );
};
