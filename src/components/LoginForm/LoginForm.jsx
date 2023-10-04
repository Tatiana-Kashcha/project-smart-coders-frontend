import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../redux/auth/authOperations';
import { LoginSchema } from './LoginSchema';

import { ReactComponent as ShowIcon } from 'icons/eye.svg';
import { ReactComponent as HideIcon } from 'icons/eye-slash.svg';
import { ReactComponent as LoginIcon } from 'icons/log-in.svg';

import {
  Form,
  Title,
  Label,
  Input,
  Error,
  ToggleShowHide,
  Password,
  Button,
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
          toast.success('Success');
          navigate('/calendar');
          setSubmitting(false);
          resetForm();
        }
      } catch (e) {
        toast.error('Login or password wrong');
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Log in</Title>

      <Label htmlFor="email">Email</Label>
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
            formik.touched.email && formik.errors.email ? '#E74A3B' : '#3CBC81',
        }}
      />
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
              formik.touched.password && formik.errors.password
                ? '#E74A3B'
                : '#3CBC81',
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
        <LoginIcon
          style={{ width: '20px', height: '20px', marginLeft: '11px' }}
        />
      </Button>
    </Form>
  );
};
