import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import { login } from '../../redux/auth/authOperations';
import { LoginSchema } from './LoginSchema';

import { ReactComponent as ShowIcon } from 'icons/eye.svg';
import { ReactComponent as HideIcon } from 'icons/eye-slash.svg';

import {
  Form,
  Title,
  Label,
  Input,
  Error,
  ToggleShowHide,
  Password,
  Button,
  ButtonLogin,
  ErrorIcon,
  CorrectIcon,
  IconStatusBox,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const actionOutcome = await dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        );
        if (actionOutcome) {
          Notify.success('Success');
          navigate('/calendar');
          setSubmitting(false);
          resetForm();
        }
      } catch (e) {
        Notify.failure('Login or password wrong');
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Log in</Title>

      <Label htmlFor="email">Email</Label>
      <IconStatusBox>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="nadiia@gmail.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            borderColor:
              (formik.touched.email && formik.errors.email && '#E74A3B') ||
              (formik.touched.email && !formik.errors.email && '#3CBC81'),
          }}
        />
        {formik.touched.email && formik.errors.email && <ErrorIcon />}
        {formik.touched.email && !formik.errors.email && <CorrectIcon />}
      </IconStatusBox>
      {formik.touched.email && formik.errors.email ? (
        <Error>{formik.errors.email}</Error>
      ) : null}

      <Label htmlFor="password">Password</Label>

      <Password>
        <Input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="・・・・・・・"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          style={{
            borderColor:
              (formik.touched.password &&
                formik.errors.password &&
                '#E74A3B') ||
              (formik.touched.password && !formik.errors.password && '#3CBC81'),
          }}
        />
        <ToggleShowHide type="button" onClick={handleShowPassword}>
          {showPassword ? (
            <ShowIcon style={{ marginLeft: '8px' }} />
          ) : (
            <HideIcon style={{ marginLeft: '8px' }} />
          )}
        </ToggleShowHide>
      </Password>

      {formik.touched.password && formik.errors.password ? (
        <Error>{formik.errors.password}</Error>
      ) : null}

      <Button type="submit">
        Log in
        <ButtonLogin />
      </Button>
    </Form>
  );
};
