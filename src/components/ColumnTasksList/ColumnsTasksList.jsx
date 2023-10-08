import React from 'react';
import TaskColumnCard from './ColumnsTasksList.styled';
import * as s from './TaskColumnCard.styled';

export const ColumnsTasksList = ({ tasks }) => {
  return (
    <s.CardList>
      {tasks.map((task, index) => (
        <TaskColumnCard key={index} task={task} />
      ))}
    </s.CardList>
  );
}