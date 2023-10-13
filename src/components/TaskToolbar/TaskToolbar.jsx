import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTask, patchTask } from '../../redux/tasks/operations';
import { selectTasks } from '../../redux/tasks/selectors';

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ taskId, categoryTitle }) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  let topChoseCategoryBtn;
  let lowerChoseCategoryBtn;
  switch (categoryTitle) {
    case 'In progress':
      topChoseCategoryBtn = 'To do';
      lowerChoseCategoryBtn = 'Done';
      break;

    case 'To do':
      topChoseCategoryBtn = 'In progress';
      lowerChoseCategoryBtn = 'Done';
      break;

    case 'Done':
      topChoseCategoryBtn = 'In progress';
      lowerChoseCategoryBtn = 'To do';
      break;

    default:
      break;
  }

  const togglShowCategoryMenu = () => {
    setIsCategoryMenuOpen(prevState => !prevState);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const takeChosedTask = () => {
    const chosedTask = tasks.filter(task => task._id === taskId)[0];

    return chosedTask;
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  const handleMoveToCategory = evt => {
    const newCategoryTitle = evt.target.textContent
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-');

    const chosedTask = takeChosedTask();

    const changedTask = {
      title: chosedTask.title,
      start: chosedTask.start,
      end: chosedTask.end,
      priority: chosedTask.priority,
      date: chosedTask.date,
      category: newCategoryTitle,
    };

    dispatch(patchTask({ taskId, changedTask }))
      .then(() => {
        togglShowCategoryMenu();

        Notify.success('Task changed');
      })
      .catch(error => {
        Notify.failure(`${error.message}`);
      });
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn
          type="button"
          aria-label="Change task category"
          onClick={togglShowCategoryMenu}
        />

        <s.PencilBtn type="button" aria-label="Edit task" onClick={openModal} />

        <s.TrashBtn
          type="button"
          aria-label="Delete task"
          onClick={handleDeleteTask}
        />

        {isModalOpen && (
          <TaskModal
            task={takeChosedTask()}
            closeModal={closeModal}
            showAddBtnRew={false}
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
