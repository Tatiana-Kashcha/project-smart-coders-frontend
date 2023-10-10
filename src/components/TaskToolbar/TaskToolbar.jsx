import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTask, patchTask } from '../../redux/tasks/operations';
import { selectTasks } from '../../redux/tasks/selectors';

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ taskId, categoryTitle }) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  console.log('tasks', tasks); //!

  let topChoseCategoryBtn;
  let lowerChoseCategoryBtn;
  switch (categoryTitle) {
    case 'in-progress':
      topChoseCategoryBtn = 'to-do';
      lowerChoseCategoryBtn = 'done';
      break;

    case 'to-do':
      topChoseCategoryBtn = 'in-progress';
      lowerChoseCategoryBtn = 'done';
      break;

    case 'done':
      topChoseCategoryBtn = 'in-progress';
      lowerChoseCategoryBtn = 'to-do';
      break;

    default:
      break;
  }

  const togglShowCategoryMenu = () => {
    setIsCategoryMenuOpen(prevState => !prevState);
  };

  const togglShowEditModal = () => {
    setIsShowEditModal(prevState => !prevState);
  };

  const takeChosedTask = () => {
    const chosedTask = tasks.filter(task => task._id === taskId)[0];
    console.log('chosedTask from takeChosedTask', chosedTask); //!

    return chosedTask;
  };

  const handleEditTask = () => {
    togglShowEditModal();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  const handleMoveToCategory = evt => {
    togglShowCategoryMenu();

    const newCategoryTitle = evt.target.textContent
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-');
    console.log('categoryTitle', categoryTitle); //!
    console.log('newCategory', newCategoryTitle); //!

    const changedTask = { ...takeChosedTask(), category: newCategoryTitle };
    console.log('changedTask', changedTask._id); //!

    dispatch(patchTask(changedTask)); //?/???????????????
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn
          type="button"
          aria-label="Change task category"
          onClick={togglShowCategoryMenu}
        />

        <s.PencilBtn
          type="button"
          aria-label="Edit task"
          onClick={handleEditTask}
        />

        <s.TrashBtn
          type="button"
          aria-label="Delete task"
          onClick={handleDeleteTask}
        />

        {isShowEditModal && (
          <TaskModal
            task={takeChosedTask()} //!????
            onClose={togglShowEditModal}
          />
        )}
      </s.Toolbar>

      {isCategoryMenuOpen && (
        <s.ToolMenu>
          <s.ToolMenuBtn onClick={handleMoveToCategory}>
            {topChoseCategoryBtn}
            <ArrowCircle width={16} />
          </s.ToolMenuBtn>
          <s.ToolMenuBtn onClick={handleMoveToCategory}>
            {lowerChoseCategoryBtn} <ArrowCircle width={16} />
          </s.ToolMenuBtn>
        </s.ToolMenu>
      )}
    </>
  );
};
