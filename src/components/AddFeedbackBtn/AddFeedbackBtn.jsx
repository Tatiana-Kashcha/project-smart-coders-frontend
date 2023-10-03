import { useState } from 'react';
import AddFeedbackModal from 'components/AddFeedbackModal/AddFeedbackModal';
import * as s from './AddFeedbackBtn.styled';

const AddFeedbackBtn = () => {
  const [shownModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(prevShownModal => !prevShownModal);
  };

  return (
    <>
      <s.FeedbackBtn type="button" onClick={onModal}>
        Feedback
      </s.FeedbackBtn>
      {shownModal && <AddFeedbackModal onClose={onModal} />}
    </>
  );
};

export default AddFeedbackBtn;
