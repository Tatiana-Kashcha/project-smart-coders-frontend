import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(3, 'Name must contain 3 characters or more')
    .max(20, 'Name must contain 20 characters or less'),
  email: yup
    .string()
    .required('Required')
    .matches(emailRegex, 'Invalid email format'),
  password: yup
    .string()
    .required('Required')
    .min(8, 'Password must contain 8 characters or more')
    .max(30, 'Password must contain 30 characters or less')
    .matches(
      passwordRegex,
      'Password should contain  at least eight characters and at least one number and one letter'
    ),
});
