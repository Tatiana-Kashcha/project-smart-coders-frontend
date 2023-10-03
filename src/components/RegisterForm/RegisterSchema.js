import * as yup from 'yup';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;
const emailRegex = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/;

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
    .min(6, 'Password must contain 6 characters or more')
    .max(20, 'Password must contain 20 characters or less')
    .matches(
      passwordRegex,
      'Password should contain  at least eight characters and at least one number and one letter'
    ),
});
