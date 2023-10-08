import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { TaskModal } from 'components/TaskModal/TaskModal';
// import { deleteTask, patchTask } from '../../redux/tasks/operations'; //?
// import { selectTasks } from 'redux/tasks/selectors'; //!

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({
  id,
  task,
  groups,
  onDeleteTask,
  onUpdateTask,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); //!!!!!!!!!!
  // const [isDeleting, setIsDeleting] = useState(false); //!

  const dispatch = useDispatch();

  // const selectTask = useSelector(selectTasks); //!
  // console.log('selectTasks', selectTasks()); //!

  const chooseGroup = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleMoveToGroup = () => {
    chooseGroup();
    // TODO: patchTask
  };

  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleDeleteTask = () => {
    // TODO: dispatch(deleteTask(id));
  };

  return (
    <>
      <s.Toolbar>
        <s.ArrowCircleBtn
          type="button"
          aria-label="Change task group"
          onClick={chooseGroup}
        />

        <s.PencilBtn
          type="button"
          aria-label="Edit task"
          onClick={handleEditTask}
        />

        <s.TrashBtn
          type="button"
          aria-label="Delete task"
          onClick={() => dispatch(handleDeleteTask(id))}
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
          <s.ToolMenuBtn onClick={() => dispatch(handleMoveToGroup(id))}>
            In progress
            <ArrowCircle width={16} />
          </s.ToolMenuBtn>
          <s.ToolMenuBtn onClick={() => dispatch(handleMoveToGroup(id))}>
            Done <ArrowCircle width={16} />
          </s.ToolMenuBtn>
        </s.ToolMenu>
      )}
    </>
  );
};

// disabled = { isDeleting }; //!?
/* <ButtonDelete type="button" onClick={() => handleDeleteContact(id)}></ButtonDelete> */ //!
