import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import * as selectors from 'redux/tasks/selectors';
import * as operations from 'redux/tasks/operations';

export const useTasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectors.selectTasks);
  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);

  const getAllTasks = useCallback(
    date => dispatch(operations.getAllTasks(date)),
    [dispatch]
  );
  const addTask = task => dispatch(operations.addTask(task));
  const deleteTask = taskId => dispatch(operations.deleteTask(taskId));
  const patchTask = ({ id, task }) =>
    dispatch(operations.patchTask({ id, task }));

  return {
    tasks,
    isLoading,
    error,
    getAllTasks,
    addTask,
    deleteTask,
    patchTask,
  };
};
