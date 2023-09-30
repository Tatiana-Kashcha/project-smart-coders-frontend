import Modal from '../Modal/Modal.js';
import FeedbackForm from '../FeedbackForm/FeedbackForm.js';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

export default AddFeedbackModal;
