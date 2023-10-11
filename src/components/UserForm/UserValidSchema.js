import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegex = /^\+?[\d\s()-]{8,20}$/;
const skypeRegex = /^[a-zA-Z0-9_.-]{3,}$/;
const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;
const birthdayRegex = dateRegexp;

export const UserValidSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name is too short - must be at least 3 characters')
      .max(20, 'Name is too long - must be no more than 20 characters'),
    birthday: Yup.string()
      .matches(birthdayRegex, 'Valid birthday has format YYYY-MM-DD')
      .notRequired(),
    email: Yup.string()
      .matches(emailRegex, 'Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegex, 'Valid number is format +38 (000) 123 45 67')
      .notRequired(),
    skype: Yup.string()
      .matches(
        skypeRegex,
        'Valid skype is format only latin letters, numbers, and the following special characters'
      )

      .notRequired(),
  });
