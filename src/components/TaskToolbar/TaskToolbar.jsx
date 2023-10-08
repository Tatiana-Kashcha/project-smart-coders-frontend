import React, { useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ task, groups, onDeleteTask, onUpdateTask }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMoveToGroup = () => {
    setIsMenuOpen(true);
  };

  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleDeleteTask = () => {
    setIsDeleting(true);
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn onClick={handleMoveToGroup} />

        <s.PencilBtn onClick={handleEditTask} />

        <s.TrashBtn onClick={handleDeleteTask} disabled={isDeleting} />

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
