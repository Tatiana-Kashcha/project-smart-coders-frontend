import React, { useState } from 'react';
import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import { TaskModal } from 'components/TaskModal/TaskModal';
import UserInfo from '../UserInfo/UserInfo';

import * as s from './TaskColumnCard.styled';

export const TaskColumnCard = props => {
  const { description, priority } = props;
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
          <UserInfo />
          <s.Priority>{priority}</s.Priority>
        </s.CardAvAndPri>
        <TaskToolbar />
      </s.CardEl>
      {isModalOpen && <TaskModal onCloseModal={handleCloseModal} />}
    </s.Card>
  );
};
