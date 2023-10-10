import Modal from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ status, closeModal, initialData = {} }) => {
  return (
    <>
      <Modal onClose={closeModal}>
        <TaskForm
          status={status}
          onClose={closeModal}
          initialData={initialData}
        />
      </Modal>
    </>
  );
};
