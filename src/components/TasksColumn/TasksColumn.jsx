import React from 'react';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { selectTasks } from 'redux/tasks/selectors';
// import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import * as s from './TasksColumn.styled';

export const TasksColumn = ({ groupTitle, groupId }) => {
  const task = useSelector(selectTasks);
  const params = useParams();

  const inProgress = useMemo(() => {
    return task.filter(({ category, date }) => {
      return category === groupTitle && date === params.currrentDay;
    });
  }, [task, groupTitle, params.currrentDay]);
  return (
    <s.TasksCol>
      <ColumnHeadBar title={groupTitle} columnId={groupId} />
      <ul>
        {inProgress.map(({ title, category, date }) => {
          const id = nanoid();
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{category}</p>
              <p>{date}</p>
            </li>
          );
        })}
      </ul>
      {/* <s.DivList><ColumnTasksList tasks={tasks} /></s.DivList> */}

      <AddTaskBtn groupId={groupId} />
    </s.TasksCol>
  );
};
