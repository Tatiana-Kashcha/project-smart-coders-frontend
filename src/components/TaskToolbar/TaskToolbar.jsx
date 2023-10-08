import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTask } from '../../redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ task, groups, onDeleteTask, onUpdateTask }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false); //!

  const dispatch = useDispatch();
  const selectTask = useSelector(selectTasks);

  const handleMoveToGroup = () => {
    setIsMenuOpen(true);
  };

  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(selectTask.id));
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn onClick={handleMoveToGroup} />

        <s.PencilBtn onClick={handleEditTask} />

        <s.TrashBtn
          type="button"
          aria-label="Delete task"
          onClick={handleDeleteTask}
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
          <s.ToolMenuBtn>
            In progress
            <s.ArrowCircleBtn width={16} />
          </s.ToolMenuBtn>
          <s.ToolMenuBtn>
            Done <s.ArrowCircleBtn width={16} />
          </s.ToolMenuBtn>
        </s.ToolMenu>
      )}
    </>
  );
};

// disabled = { isDeleting }; //!?
