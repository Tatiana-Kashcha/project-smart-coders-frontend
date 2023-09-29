import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    name: yup.string()
      .required('Required')
      .min(3, 'Name must contain 3 characters or more')
      .max(16, 'Name must contain 16 characters or less'),
    email: yup.string().required('Required').email('Invalid email'),
    password: yup.string()
      .required('Required')
      .min(6, 'Password must contain 6 characters or more')
      .max(20, 'Password must contain 20 characters or less')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,60})/,
        'Password must contain a number, an uppercase and lowercase letter, and a special character'
      ),
  });
