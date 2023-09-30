import { useState } from 'react';
import AddFeedbackModal from '../components/AddFeedbackModal/AddFeedbackModal.js';

export const App = () => {
  const [shownModal, setShowModal] = useState(false);

  const onModal = () => {
    setShowModal(prevShownModal => !prevShownModal);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <button type="button" onClick={onModal}>
          CLICK HERE
        </button>
        {shownModal && <AddFeedbackModal onClose={onModal} />}
      </div>
    </div>
  );
};
