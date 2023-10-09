import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AiFillStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field } from 'formik';
import { Notify } from 'notiflix';

import { FeedbackValidSchema } from './FeedbackValidScheme';
import { selectUser } from 'redux/auth/selectors';
import {
  createReview,
  updateReview,
  deleteReview,
} from 'redux/reviews/operations';

import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import { ReactComponent as TrashBox } from '../../icons/trash-box-with-line.svg';
import * as s from './FeedbackForm.styled';

const FeedbackForm = ({ onClose, showSaveBtnRew, ratingRew, reviewRew }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const [showEditBtn, setShowEditBtn] = useState(false);
  const showSaveBtn = showSaveBtnRew || false;

  const [rating, setRating] = useState(ratingRew);
  const review = reviewRew;

  const starsConfig = {
    size: 24,
    count: 5,
    isHalf: false,
    edit: true,
    value: rating,
    color: '#CEC9C1',
    activeColor: '#FFAC33',
    emptyIcon: <AiFillStar size={24} />,
    filledIcon: <AiFillStar size={24} />,
    onChange: newValue => setRating(newValue),
  };

  const handleSubmit = (values, { resetForm }) => {
    if (showSaveBtn) {
      dispatch(createReview({ rating, comment: values.review }))
        .then(() => {
          Notify.success('You have successfully created your review');
          resetForm();
          onClose();
        })
        .catch(error => {
          Notify.failure(`${error.message}`);
        });
    }

    if (showEditBtn) {
      dispatch(updateReview({ rating, comment: values.review }))
        .then(() => {
          Notify.success('You have successfully updated your review');
          resetForm();
          onClose();
        })
        .catch(error => {
          Notify.failure(`${error.message}`);
        });
    }
  };

  const handleEdit = () => {
    setShowEditBtn(true);
  };

  const handleDelete = () => {
    dispatch(deleteReview(currentUser._id))
      .then(() => {
        Notify.success('You have successfully deleted your review');
        onClose();
      })
      .catch(error => {
        Notify.failure(`${error.message}`);
      });
  };

  return (
    <Formik
      initialValues={{ rating, review }}
      validationSchema={FeedbackValidSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <s.FormWrapper autoComplete="off">
          <div>
            <s.Label htmlFor="rating">Rating </s.Label>
            <ReactStars {...starsConfig} />
          </div>
          <s.ReviewContainer>
            <s.ContainerLabelAndBtn>
              <s.Label htmlFor="review">Review</s.Label>

              {!showSaveBtn ? (
                <s.UpContainerButton>
                  <s.EditButton
                    type="button"
                    onClick={handleEdit}
                    data-active={showEditBtn}
                  >
                    <Pencil />
                  </s.EditButton>
                  <s.DeleteButton type="button" onClick={handleDelete}>
                    <TrashBox />
                  </s.DeleteButton>
                </s.UpContainerButton>
              ) : null}
            </s.ContainerLabelAndBtn>
            <s.ReviewInput
              name="review"
              placeholder="Enter text"
              as={Field}
              component="textarea"
              error={!!errors.review ? 'true' : undefined}
              required
            />
            <s.ErrorContainer name="review" component="div" />
          </s.ReviewContainer>

          {showSaveBtn ? (
            <s.DownContainerButton>
              <s.ConfirmButton type="submit">Save</s.ConfirmButton>
              <s.CancelButton type="button" onClick={onClose}>
                Cancel
              </s.CancelButton>
            </s.DownContainerButton>
          ) : null}

          {showEditBtn ? (
            <s.DownContainerButton>
              <s.ConfirmButton type="submit">Edit</s.ConfirmButton>
              <s.CancelButton type="button" onClick={onClose}>
                Cancel
              </s.CancelButton>
            </s.DownContainerButton>
          ) : null}
        </s.FormWrapper>
      )}
    </Formik>
  );
};

export default FeedbackForm;
