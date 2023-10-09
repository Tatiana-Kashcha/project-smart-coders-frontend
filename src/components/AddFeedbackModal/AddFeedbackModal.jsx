import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { selectReviews, selectIsLoadingReviews } from 'redux/reviews/selectors';
import { selectUser } from 'redux/auth/selectors';
import { getUserReview } from 'redux/reviews/operations';

import Modal from '../Modal/Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';

const AddFeedbackModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoadingReviews);

  const currentUser = useSelector(selectUser);

  const [hasReviews, setHasReviews] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserReview());
    }
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (reviews.rating !== undefined && reviews.comment !== undefined) {
      setRating(reviews.rating);
      setReview(reviews.comment);
      setHasReviews(true);
      setShowSaveBtn(false);
    } else {
      setRating(1);
      setReview('');
      setShowSaveBtn(true);
      setHasReviews(true);
    }
  }, [reviews, currentUser]);

  return (
    <>
      {isLoading || !hasReviews ? (
        <div>{Loading.circle()}</div>
      ) : (
        <>
          <Modal onClose={onClose}>
            {Loading.remove()}
            <FeedbackForm
              onClose={onClose}
              showSaveBtnRew={showSaveBtn}
              ratingRew={rating}
              reviewRew={review}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default AddFeedbackModal;
