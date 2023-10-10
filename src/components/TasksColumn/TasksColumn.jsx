import React from 'react';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { nanoid } from 'nanoid';

import { selectTasks } from 'redux/tasks/selectors';
import { TaskColumnCard } from 'components/TaskColumnCard/TaskColumnCard';
// import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import * as s from './TasksColumn.styled';

export const TasksColumn = ({ groupTitle, groupId }) => {
  const tasks = useSelector(selectTasks);
  const params = useParams();

  const inProgress = useMemo(() => {
    return tasks.filter(({ category, date }) => {
      return category === groupTitle && date === params.currrentDay;
    });
  }, [tasks, groupTitle, params.currrentDay]);

  return (
    <s.TasksCol>
      <ColumnHeadBar title={groupTitle} columnId={groupId} />
      <ul>
        {inProgress.map(({ _id, title, priority }) => {
          const id = nanoid();
          return (
            <s.TasksScroll>
              <TaskColumnCard
                key={id}
                taskId={_id}
                groupTitle={groupTitle}
                description={title}
                priority={priority}
              />
            </s.TasksScroll>
          );
        })}
      </ul>
      {/* <s.DivList><ColumnTasksList tasks={tasks} /></s.DivList> */}

      <AddTaskBtn groupId={groupId} />
    </s.TasksCol>
  );
};
