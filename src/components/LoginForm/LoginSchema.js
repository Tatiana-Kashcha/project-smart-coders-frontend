import * as yup from 'yup';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;
const emailRegex = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/;

export const LoginSchema = yup.object().shape({
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
