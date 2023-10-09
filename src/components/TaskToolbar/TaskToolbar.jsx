import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTask, patchTask } from '../../redux/tasks/operations'; //?
import { selectTasks } from '../../redux/tasks/selectors';
//!

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({
  taskId,
  groupTitle,
  allTasks,
  task,
  groups,
  onDeleteTask,
  onUpdateTask,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); //!!!!!!!!!!
  // const [isDeleting, setIsDeleting] = useState(false); //!

  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks); //!
  console.log('Tasks', tasks); //!

  const onChooseGroup = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleMoveToGroup = evt => {
    onChooseGroup();

    const newGroup = evt.target.textContent.toLowerCase();
    console.log('buttonText', newGroup);

    const taskToRemove = tasks.filter(task => task._id === taskId)[0];
    console.log('taskToRemove', taskToRemove); //!

    const qwe = { ...taskToRemove, category: 'done' };
    console.log('qwe', qwe); //!

    // TODO: patchTask(taskId, task)
  };

  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId)); //??! ID
    // TODO: dispatch(deleteTask(id));
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn
          type="button"
          aria-label="Change task group"
          onClick={onChooseGroup}
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
          // onClick={() => dispatch(handleDeleteTask(id))}
        />

        {showEditModal && (
          <TaskModal
            task={task}
            onClose={() => setShowEditModal(false)}
            onUpdateTask={onUpdateTask}
          />
        )}
      </s.Toolbar>
      {isMenuOpen && (
        <s.ToolMenu>
          <s.ToolMenuBtn onClick={handleMoveToGroup}>
            In progress
            <ArrowCircle width={16} />
          </s.ToolMenuBtn>
          <s.ToolMenuBtn onClick={handleMoveToGroup}>
            Done <ArrowCircle width={16} />
          </s.ToolMenuBtn>
        </s.ToolMenu>
      )}
    </>
  );
};

// disabled = { isDeleting }; //!?
/* <ButtonDelete type="button" onClick={() => handleDeleteContact(id)}></ButtonDelete> */ //!
