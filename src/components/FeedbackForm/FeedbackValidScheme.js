import * as Yup from 'yup';

export const FeedbackValidSchema = () =>
  Yup.object().shape({
    review: Yup.string()
      .transform(value => value.trim())
      .min(1, 'Must be at least 1 characters')
      .max(300, 'Must be at most 300 characters')
      .required('This review field is required'),
  });
