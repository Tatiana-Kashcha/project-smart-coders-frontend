import React from 'react';
// import {TaskColumnCard} from '../TaskColumnCard/TaskColumnCard';
import * as s from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks }) => {
  return (
    <s.CardList>
      {/* {tasks.map((task, index) => (
        <TaskColumnCard key={index} task={task} />
      ))} */}
    </s.CardList>
  );
}