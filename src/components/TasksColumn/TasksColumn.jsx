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

  const groupTitleOptimised = groupTitle
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-'); //! add optimisation

  const inProgress = useMemo(() => {
    return tasks.filter(({ category, date }) => {
      return category === groupTitleOptimised && date === params.currrentDay;
    });
  }, [tasks, groupTitleOptimised, params.currrentDay]);

  return (
    <s.TasksCol>
      <ColumnHeadBar title={groupTitle} columnId={groupId} />
      <s.TasksScroll>
        {inProgress.map(({ _id, title, priority }) => {
          const id = nanoid();
          return (
            <li>
              <TaskColumnCard
                key={id}
                taskId={_id}
                groupTitle={groupTitle}
                description={title}
                priority={priority}
              />
            </li>
          );
        })}
      </s.TasksScroll>
      {/* <s.DivList><ColumnTasksList tasks={tasks} /></s.DivList> */}

      <AddTaskBtn groupId={groupId} />
    </s.TasksCol>
  );
};
