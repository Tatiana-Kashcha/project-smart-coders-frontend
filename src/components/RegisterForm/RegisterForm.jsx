import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, register } from 'redux/auth/authOperations';
import { RegisterSchema } from './RegisterSchema';

import { ReactComponent as ShowIcon } from 'icons/eye.svg';
import { ReactComponent as HideIcon } from 'icons/eye-slash.svg';
import { ReactComponent as LoginIcon } from 'icons/log-in.svg';

import {
  Form,
  Title,
  Label,
  Input,
  Error,
  Button,
  Password,
  ToggleShowHide,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const outcomeAction = await dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );
        if (outcomeAction.type === 'auth/register/fulfilled') {
          await dispatch(
            login({
              email: values.email,
              password: values.password,
            })
          );

          navigate('/');
        }

        if (outcomeAction.type === 'auth/register/rejected') {
          toast.error(outcomeAction.payload.response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Title>Sign Up</Title>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />

      {formik.touched.name && formik.errors.name ? (
        <Error>{formik.errors.name}</Error>
      ) : null}

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
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
          placeholder="Enter password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
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

      <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
        Sign Up
        <LoginIcon
          style={{ width: '20px', height: '20px', marginLeft: '11px' }}
        />
      </Button>
    </Form>
  );
};
