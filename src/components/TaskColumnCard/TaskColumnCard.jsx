import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import React, { useState } from 'react';
import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import { TaskModal } from 'components/TaskModal/TaskModal';

import * as s from './TaskColumnCard.styled';
import { StyleSheetManager } from 'styled-components';

export const TaskColumnCard = props => {
  const user = useSelector(selectUser);
  const { taskId, groupTitle, description, priority } = props;
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
    <StyleSheetManager
      shouldForwardProp={prop => prop !== 'calendarorstatistic'}
    >
      <s.Card>
        <s.CardDescr>{description}</s.CardDescr>
        <s.CardEl>
          <s.CardAvAndPri>
            {avatar === '' ? (
              <s.Elipse>{bigFirstLeter}</s.Elipse>
            ) : (
              <s.Elipse>{<s.Avatar src={avatar} alt="avatar" />}</s.Elipse>
            )}
            <s.Priority priority={priority}>{priority}</s.Priority>
          </s.CardAvAndPri>
          <TaskToolbar taskId={taskId} categoryTitle={groupTitle} />
        </s.CardEl>
        {isModalOpen && <TaskModal onCloseModal={handleCloseModal} />}
      </s.Card>
    </StyleSheetManager>
  );
};
