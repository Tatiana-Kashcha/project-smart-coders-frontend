import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field } from 'formik';
import { Notify } from 'notiflix';

import { FeedbackValidSchema } from './FeedbackValidScheme';
import {
  selectReviews,
  selectIsLoadingReviews,
  selectErrorReviews,
} from 'redux/reviews/selectors';
import { selectUser } from 'redux/auth/selectors';
import {
  getUserReview,
  createReview,
  updateReview,
  deleteReview,
} from 'redux/reviews/operations';

import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import { ReactComponent as TrashBox } from '../../icons/trash-box-with-line.svg';
import * as s from './FeedbackForm.styled';

import Loader from '../Loader/Loader';

const FeedbackForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoadingReviews);
  const error = useSelector(selectErrorReviews);

  const currentUser = useSelector(selectUser);

  const [hasReviews, setHasReviews] = useState(false);
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserReview());
      //   .catch(error => {
      //   if (error.response && error.response.status === 404) {
      //     // setHasError(true);
      //   } else {
      //     // console.error(error);
      //   }
      // });
    }
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (reviews.length > 0) {
      if (reviews[0].owner === currentUser?._id) {
        setRating(reviews[0].rating);
        setReview(reviews[0].comment);
        setHasReviews(true);
        setShowSaveBtn(false);
      }
      // if (reviews[0].owner !== currentUser?._id) {
      //   setRating(1);
      //   setReview('');
      //   setHasReviews(true);
      //   setShowSaveBtn(true);
      // }
    } else {
      setRating(1);
      setReview('');
      setHasReviews(true);
      setShowSaveBtn(true);
    }
  }, [reviews, currentUser]);

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

  const handleSubmit = values => {
    if (showEditBtn) {
      dispatch(updateReview({ rating, comment: values.review }))
        .then(() => {
          Notify.success('You have successfully updated your review');
          onClose();
        })
        .catch(error => {
          Notify.failure(`${error.message}`);
        });
    }

    if (showSaveBtn) {
      dispatch(createReview({ rating, comment: values.review }))
        .then(() => {
          Notify.success('You have successfully created your review');
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
      initialValues={{ review }}
      enableReinitialize={true}
      validationSchema={FeedbackValidSchema}
      onSubmit={handleSubmit}
    >
      {isLoading || !hasReviews ? (
        <Loader />
      ) : (
        ({ errors }) => (
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
        )
      )}
    </Formik>
  );
};

export default FeedbackForm;
