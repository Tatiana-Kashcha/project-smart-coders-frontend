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
// import { selectLoading } from 'redux/user/selectors';
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
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoadingReviews);
  const error = useSelector(selectErrorReviews);

  // const error = useSelector(state => state.reviews.error);
  // const userReview = useSelector(state => state.reviews.items);
  // const currentUser = useSelector(selectUserInfo); не то !!!
  // const currentUserLoading = useSelector(selectLoading);

  // export const selectUserInfo = state => state.user.info;
  // export const selectLoading = state => state.user.loading;

  // export const selectIsLoggedIn = state => state.auth.isLoggedIn;
  const currentUser = useSelector(selectUser);
  // export const selectIsRefreshing = state => state.auth.isRefreshing;
  // export const selectAccessToken = state => state.auth.accessToken;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);

  // console.log(currentUser._id);
  // console.log(currentUserLoading);

  // useEffect(() => {
  //   dispatch(getUserReview());
  //   console.log('dispatch');
  //   console.log(reviews);
  // }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserReview());
    }
    if (reviews.length) {
      setRating(reviews[0].rating);
    }
    if (!reviews.length) {
      setShowSaveBtn(true);
    }
  }, [dispatch, currentUser]);

  // console.log(currentUser);
  console.log(reviews);
  // console.log(isLoading);
  // console.log(error);

  const [rating, setRating] = useState(reviews.rating || 1);
  // const [review, setReview] = useState('');
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);

  const initialValues = {
    // rating: reviews[0].rating || 1,
    review: reviews.length > 0 ? reviews[0].comment : '',
  };

  // console.log(reviews.rating);
  // console.log(reviews.comment);

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
      dispatch(updateReview({ rating, comment: values.review }));
      Notify.success('You have successfully updated your review');
    }
    if (showSaveBtn) {
      dispatch(createReview({ rating, comment: values.review }));
      Notify.success('You have successfully create your review');
    }
    //  { resetForm }
    // setReview(values.review);

    // console.log(rating);
    // console.log(values.review);

    onClose();
    // setRating(1);
    // resetForm();
  };
  // Notify.success('Profile data changed successfully');
  // } catch {
  // Notify.failure('Something went wrong... Try again!');

  // {isLoading && currenUserInfo === null && !error ? (
  //       <Loader />
  //     ) : (

  const onEdit = () => {
    // dispatch(updateReview(currentUser._id));
    setShowEditBtn(true);
    // onClose();
  };

  const onDelete = () => {
    dispatch(deleteReview(currentUser._id));
    Notify.success('You have successfully deleted your review');
    onClose();
  };

  console.log(isLoading);
  console.log(error);
  console.log(reviews.length === 0);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackValidSchema}
      onSubmit={handleSubmit}
    >
      {isLoading || reviews.length === 0 ? (
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
                      onClick={onEdit}
                      // isActive={showEditBtn}
                    >
                      <Pencil />
                    </s.EditButton>
                    <s.DeleteButton type="button" onClick={onDelete}>
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
