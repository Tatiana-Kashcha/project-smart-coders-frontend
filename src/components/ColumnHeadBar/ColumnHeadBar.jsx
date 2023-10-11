import React, { useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import * as s from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title = 'todo', groupId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <s.ColumnHB>
      <s.HeadBarTitle>{title}</s.HeadBarTitle>
      <s.HeadBarBtn onClick={openModal} />
      {isModalOpen && (
        <TaskModal
          groupId={groupId}
          closeModal={closeModal}
          showAddBtnRew={true}
        />
      )}
    </s.ColumnHB>
  );
};
