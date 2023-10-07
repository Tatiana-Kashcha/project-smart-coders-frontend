import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field } from 'formik';

import { FeedbackValidSchema } from './FeedbackValidScheme';
import {
  selectReviews,
  selectIsLoadingReviews,
  selectErrorReviews,
} from 'redux/reviews/selectors';
import { selectLoading } from 'redux/user/selectors';
import { selectUser } from 'redux/auth/selectors';
import {
  deleteReview,
  getUserReview,
  updateReview,
  // createReview,
  // updateReview,
  // deleteReview,
} from 'redux/reviews/operations';

import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import { ReactComponent as TrashBox } from '../../icons/trash-box-with-line.svg';
import * as s from './FeedbackForm.styled';

import Loader from 'components/Loader/Loader';

const FeedbackForm = ({ onClose }) => {
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoadingReviews);
  const error = useSelector(selectErrorReviews);

  // const error = useSelector(state => state.reviews.error);
  // const userReview = useSelector(state => state.reviews.items);
  // const currentUser = useSelector(selectUserInfo); не то !!!
  const currentUserLoading = useSelector(selectLoading);

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

  console.log(reviews);
  console.log(isLoading);
  console.log(error);

  // console.log(currentUser._id);
  // console.log(currentUserLoading);

  useEffect(() => {
    dispatch(getUserReview());
  }, [dispatch]);

  const [rating, setRating] = useState(reviews[0].rating || 1);
  // const [review, setReview] = useState('');
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);

  const initialValues = {
    // rating: reviews[0].rating || 1,
    review: reviews[0].comment || '',
  };

  console.log(reviews[0].rating);
  console.log(reviews[0].comment);

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
    const formData = new FormData();
    formData.append('rating', rating);
    formData.append('review', values.review);
    //  { resetForm }
    // setReview(values.review);

    console.log(rating);
    console.log(values.review);

    onClose();
    // setRating(1);
    // resetForm();
  };

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
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackValidSchema}
      onSubmit={handleSubmit}
    >
      {currentUser._id === reviews[0].owner && isLoading && !error ? (
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

                <s.UpContainerButton>
                  <s.EditButton
                    type="button"
                    onClick={onEdit}
                    isActive={showEditBtn}
                  >
                    <Pencil />
                  </s.EditButton>
                  <s.DeleteButton type="button" onClick={onDelete}>
                    <TrashBox />
                  </s.DeleteButton>
                </s.UpContainerButton>
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
