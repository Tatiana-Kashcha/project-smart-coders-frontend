import React from 'react';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { selectTasks } from 'redux/tasks/selectors';
import { TaskColumnCard } from 'components/TaskColumnCard/TaskColumnCard';
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
      <s.TasksScroll>
        {inProgress.map(({ title, priority }) => {
          const id = nanoid();
          return (
            <li>
              <TaskColumnCard
                key={id}
                description={title}
                priority={priority}
              />
            </li>
          );
        })}
      </s.TasksScroll>

      <AddTaskBtn groupId={groupId} />
    </s.TasksCol>
  );
};
