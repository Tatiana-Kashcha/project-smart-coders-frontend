import React, { useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import * as s from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title = 'todo', columnId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <s.ColumnHB>
      <s.HeadBarTitle>{title}</s.HeadBarTitle>
      <s.HeadBarBtn onClick={openModal} />
      {isModalOpen && <TaskModal columnId={columnId} onClose={closeModal} />}
    </s.ColumnHB>
  );
};
