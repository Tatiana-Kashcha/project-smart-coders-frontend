import Modal from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({
  closeModal,
  action,
  groupId,
  taskToEdit,
  showAddBtnRew,
  task,
}) => {
  return (
    <>
      <Modal onClose={closeModal}>
        <TaskForm
          onClose={closeModal}
          action={action}
          groupId={groupId}
          taskToEdit={taskToEdit}
          showAddBtnRew={showAddBtnRew}
          task={task}
        />
      </Modal>
    </>
  );
};
