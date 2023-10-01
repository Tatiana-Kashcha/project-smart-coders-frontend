import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import { ReactComponent as TrashBox } from '../../icons/trash-box-with-line.svg';
import * as s from './FeedbackForm.styled';

const schema = yup.object({
  review: yup
    .string()
    .min(1, 'Must be at least 1 characters')
    .max(300, 'Must be at most 300 characters')
    .required('This review field is required'),
});

const FeedbackForm = ({ onClose }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  const initialValues = {
    rating,
    review,
  };

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
    //  { resetForm }
    setReview(values.review);

    console.log(rating);
    console.log(values.review);

    onClose();
    // setRating(1);
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
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

              <s.UpContainerButton>
                <s.EditButton type="button">
                  <Pencil />
                </s.EditButton>
                <s.DeleteButton type="button">
                  <TrashBox />
                </s.DeleteButton>
              </s.UpContainerButton>
            </s.ContainerLabelAndBtn>
            <s.ReviewInput
              name="review"
              as={Field}
              component="textarea"
              error={!!errors.review ? 'true' : undefined}
              required
            />
            <s.ErrorContainer name="review" component="div" />
          </s.ReviewContainer>

          <s.DownContainerButton>
            <s.ConfirmButton type="submit">Save</s.ConfirmButton>
            <s.CancelButton type="button" onClick={onClose}>
              Cancel
            </s.CancelButton>
          </s.DownContainerButton>
        </s.FormWrapper>
      )}
    </Formik>
  );
};

export default FeedbackForm;
