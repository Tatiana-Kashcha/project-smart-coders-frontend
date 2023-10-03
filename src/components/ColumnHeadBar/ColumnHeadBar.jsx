import React, { useState } from 'react';
import TaskModal from './TaskModal';
import * as s from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title, columnId }) => {
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
      <s.HeadBarBtn onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
        </svg>
      </s.HeadBarBtn>
      {isModalOpen && (
        <TaskModal
          columnId={columnId}
          onClose={closeModal}
        />
      )}
    </s.ColumnHB>
  );
};


