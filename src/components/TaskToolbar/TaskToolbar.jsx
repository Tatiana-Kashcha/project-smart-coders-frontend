import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowCircle } from '../../icons/arrow-circle-broken-right.svg';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTask, patchTask } from '../../redux/tasks/operations'; //?
import { selectTasks } from '../../redux/tasks/selectors';
//!

import * as s from './TaskToolbar.styled';

export const TaskToolbar = ({ task, groups, onDeleteTask, onUpdateTask }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); //!!!!!!!!!!
  // const [isDeleting, setIsDeleting] = useState(false); //!

  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks); //!
  console.log('Tasks', tasks); //!

  const chooseGroup = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleMoveToGroup = () => {
    // TODO: patchTask
    chooseGroup();
  };

  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask('6522b2c3c8b849d6e391fc52')); //??! ID
    // TODO: dispatch(deleteTask(id));
  };

  return (
    <>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <p>{task.start}</p>
            <p>{task.end}</p>
            <p>{task.priority}</p>
            <p>{task.category}</p>
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
                onClick={() => dispatch(handleDeleteTask(task._id))}
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
                <s.ToolMenuBtn
                  onClick={() => dispatch(handleMoveToGroup(task._id))}
                >
                  In progress
                  <ArrowCircle width={16} />
                </s.ToolMenuBtn>
                <s.ToolMenuBtn
                  onClick={() => dispatch(handleMoveToGroup(task._id))}
                >
                  Done <ArrowCircle width={16} />
                </s.ToolMenuBtn>
              </s.ToolMenu>
            )}
          </li>
        ))}
      </ul>

      {/* <s.Toolbar>
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
          onClick={() => dispatch(handleDeleteTask(task._id))}
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
      )} */}
    </>
  );
};

// disabled = { isDeleting }; //!?
/* <ButtonDelete type="button" onClick={() => handleDeleteContact(id)}></ButtonDelete> */ //!
