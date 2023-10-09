import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import React, { useState } from 'react';
import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import { TaskModal } from 'components/TaskModal/TaskModal';

import * as s from './TaskColumnCard.styled';

export const TaskColumnCard = props => {
  const user = useSelector(selectUser);
  const { description, priority } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstLeter = user.name.slice(0, 1);
  const bigFirstLeter = firstLeter.toUpperCase();

  const avatar = user.avatarURL;

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
          {avatar === '' ? (
            <s.Elipse>{bigFirstLeter}</s.Elipse>
          ) : (
            <s.Elipse>{<s.Avatar src={avatar} alt="avatar" />}</s.Elipse>
          )}
          <s.Priority>{priority}</s.Priority>
        </s.CardAvAndPri>
        <TaskToolbar />
      </s.CardEl>
      {isModalOpen && <TaskModal onCloseModal={handleCloseModal} />}
    </s.Card>
  );
};
