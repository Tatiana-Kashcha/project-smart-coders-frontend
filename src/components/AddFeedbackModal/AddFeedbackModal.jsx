import Modal from '../Modal/Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

export default AddFeedbackModal;
