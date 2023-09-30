import { Modal } from '';
import { TaskForm } from '';

export const TaskModal = ({ status, handleCloseModal, taskFormData = {} }) => {
  return (
    <>
      <Modal onClose={handleCloseModal}>
        <TaskForm
          status={status}
          onClose={handleCloseModal}
          taskFormData={taskFormData}
        />
      </Modal>
    </>
  );
};
