import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTask, patchTask } from '../../redux/tasks/operations'; //?
import { selectTasks } from '../../redux/tasks/selectors';

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ taskId, categoryTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); //!!!!!!!!!!
  // const [isDeleting, setIsDeleting] = useState(false); //!
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks); //!?

  let firstMoveToCategoryBtn;
  let secondMoveToCategoryBtn;
  switch (categoryTitle) {
    case 'in-progress':
      firstMoveToCategoryBtn = 'to-do';
      secondMoveToCategoryBtn = 'done';
      break;

    case 'to-do':
      firstMoveToCategoryBtn = 'in-progress';
      secondMoveToCategoryBtn = 'done';
      break;

    case 'done':
      firstMoveToCategoryBtn = 'in-progress';
      secondMoveToCategoryBtn = 'to-do';
      break;

    default:
      break;
  }

  const togglShowChooseCategory = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const togglShowEditModal = () => {
    setShowEditModal(prevState => !prevState);
  };

  const handleEditTask = () => {
    togglShowEditModal();
    const chosedTask = tasks.filter(task => task._id === taskId)[0];
    console.log('chosedTask', chosedTask); //!
    return chosedTask;
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  // const chosedTask = tasks.filter(task => task._id === taskId)[0];
  // console.log('chosedTask', chosedTask); //!

  const handleMoveToCategory = evt => {
    togglShowChooseCategory();

    const chosedTask = tasks.filter(task => task._id === taskId)[0];
    console.log('chosedTask', chosedTask); //!

    const newCategoryTitle = evt.target.textContent
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-');
    console.log('newCategory', newCategoryTitle); //!
    console.log('categoryTitle', categoryTitle); //!

    const changedTask = { ...chosedTask, category: newCategoryTitle };
    console.log('changedTask', changedTask); //!
    dispatch(patchTask(taskId, changedTask));
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn
          type="button"
          aria-label="Change task category"
          onClick={togglShowChooseCategory}
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

        {showEditModal && (
          <TaskModal
            // task={chosedTask} //!????
            taskId={taskId}
            onClose={togglShowEditModal}
          />
        )}
      </s.Toolbar>
      {isMenuOpen && (
        <s.ToolMenu>
          <s.ToolMenuBtn onClick={handleMoveToCategory}>
            {firstMoveToCategoryBtn}
            <ArrowCircle width={16} />
          </s.ToolMenuBtn>
          <s.ToolMenuBtn onClick={handleMoveToCategory}>
            {secondMoveToCategoryBtn} <ArrowCircle width={16} />
          </s.ToolMenuBtn>
        </s.ToolMenu>
      )}
    </>
  );
};
