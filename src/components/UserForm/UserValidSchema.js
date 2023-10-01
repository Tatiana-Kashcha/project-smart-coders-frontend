import * as yup from 'yup';

const regexPhone = /^\+380\d{9}$/;
const regexSkype = /^\S[\S\s]{0,28}\S$/;

export const UserValidSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(16, 'Name is too long'),
  birthday: yup.string().notRequired(),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(
      regexPhone,
      'The phone number must start with +380 and be 9 digits long'
    )
    .min(13, 'The phone number is too Short!')
    .max(13, 'The phone number is too Long!')
    .notRequired(),
  skype: yup
    .string()
    .matches(regexSkype, 'Skype must be between 3 and 16 characters')
    .min(3, 'At least 3 digits required')
    .max(16, 'At most 16 digits is required')
    .notRequired(),
});
