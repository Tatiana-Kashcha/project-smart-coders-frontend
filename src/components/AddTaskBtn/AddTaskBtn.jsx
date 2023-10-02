import React, { useState } from 'react';
// import {TaskModal} from './TaskModal';
import * as s from './AddTaskBtn.styled';
import { ReactComponent as Plus } from '../../icons/plus.svg';

export const AddTaskBtn = ({ groupId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <s.TaskBtn onClick={openModal}>
        <s.PlusIcon>
          <Plus />
        </s.PlusIcon>
        Add task
      </s.TaskBtn>
      {/* {isModalOpen && <TaskModal groupId={groupId} closeModal={closeModal} />} */}
    </div>
  );
};
