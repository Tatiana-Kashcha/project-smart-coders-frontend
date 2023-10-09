import React, { useState } from 'react';
import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import { TaskModal } from 'components/TaskModal/TaskModal';
import * as s from './TaskColumnCard.styled';

export const TaskColumnCard = props => {
  const { description, avatarUrl, priority } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleEditClick = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <s.Card>
      <s.CardDescr>{description}</s.CardDescr>
      <s.CardEl>
        <s.CardAvAndPri>
          <s.CardAvatar src={avatarUrl} alt="User Avatar" />
          <s.Priority>{priority}</s.Priority>
        </s.CardAvAndPri>
        <TaskToolbar />
      </s.CardEl>
      {isModalOpen && <TaskModal onCloseModal={handleCloseModal} />}
    </s.Card>
  );
};
