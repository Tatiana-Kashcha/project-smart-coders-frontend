// import { useAuth } from '../../hooks/useAuth';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Formik, ErrorMessage } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { UserValidSchema } from './UserValidSchema';
import { updateUser } from '../../redux/user/operations';
import {
  AddIcon,
  AvatarWrapper,
  ButtonWrapper,
  ControlBtn,
  FieldAdd,
  Form,
  IconStatusBox,
  ImgAvatar,
  InputInfo,
  Label,
  Title,
  UserInfo,
  UserTitle,
  UserWrapper,
  WrapperForm,
  ErrorIcon,
  CorrectIcon,
  AvatarDefault,
} from './UserForm.styled';

import { DatePickerStyled, PopperDateStyles } from './DatePicker.styled';

const currentDate = dayjs(new Date()).format('DD/MM/YYYY');

const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  const [avatarURL, setAvatarURL] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    formData.append('birthday', dayjs(values.birthday).format('DD/MM/YYYY'));

    if (avatarURL) {
      formData.append('avatar', avatarURL);
    }
    try {
      await dispatch(updateUser(formData));
      toast.success('Profile data changed successfully');
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };

  return (
    <>
      <WrapperForm>
        <Formik
          validationSchema={UserValidSchema}
          initialValues={{
            name: userInfo.name || '',
            birthday: userInfo.birthday || `${currentDate}`,
            email: userInfo.email || '',
            phone: userInfo.phone || '',
            skype: userInfo.skype || '',
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            setFieldValue,
            dirty,
            isSubmitting,
            touched,
            errors,
          }) => (
            <Form>
              <div>
                <AvatarWrapper>
                  {avatarURL ? (
                    <label htmlFor="avatar">
                      <ImgAvatar
                        src={URL.createObjectURL(avatarURL)}
                        alt="Avatar"
                      />
                    </label>
                  ) : userInfo?.avatarURL ? (
                    <label htmlFor="avatar">
                      <ImgAvatar src={userInfo?.avatarURL} alt="Avatar" />
                    </label>
                  ) : (
                    <AvatarDefault />
                  )}
                </AvatarWrapper>
                <FieldAdd
                  id="add-avatar"
                  name="avatar"
                  type="file"
                  accept="image/*, .png,.jpg, .gif"
                  onChange={e => {
                    setAvatarURL(e.target.files[0]);
                    setIsFormChanged(true);
                  }}
                />
                <label htmlFor="add-avatar">
                  <AddIcon />
                </label>
              </div>
              <UserTitle>{UserInfo.name || '****'}</UserTitle>
              <Title>User</Title>
              <UserWrapper>
                <UserInfo>
                  <Label
                    style={{
                      color:
                        (touched.name && errors.name && '#E74A3B') ||
                        (touched.name && !errors.name && '#3CBC81'),
                    }}
                  >
                    <p>User Name</p>
                    <IconStatusBox>
                      <InputInfo
                        name="name"
                        style={{
                          borderColor:
                            (touched.name && errors.name && '#E74A3B') ||
                            (touched.name && !errors.name && '#3CBC81'),
                        }}
                      />
                      {touched.name && errors.name && <ErrorIcon />}
                      {touched.name && !errors.name && <CorrectIcon />}
                    </IconStatusBox>
                    <ErrorMessage name="name" component="span" />
                  </Label>

                  <Label>
                    Birthday
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePickerStyled
                        name="birthday"
                        type="date"
                        slotProps={{
                          popper: {
                            sx: PopperDateStyles,
                          },
                          textField: {
                            placeholder: userInfo.birthday || `${currentDate}`,
                          },
                        }}
                        views={['year', 'month', 'day']}
                        format="YYYY/MM/DD"
                        closeOnSelect={true}
                        disableFuture={true}
                        onChange={date => {
                          if (!date) setFieldValue('birthday', '');
                          setFieldValue('birthday', date);
                        }}
                      />
                    </LocalizationProvider>
                  </Label>
                  <div>
                    <Label>
                      Email
                      <InputInfo name="email" type="email" />
                      <ErrorMessage name="email" component="span" />
                    </Label>
                  </div>
                </UserInfo>

                <UserInfo>
                  <Label
                    style={{
                      color:
                        (touched.phone && errors.phone && '#E74A3B') ||
                        (touched.phone && !errors.phone && '#3CBC81'),
                    }}
                  >
                    Phone
                    <IconStatusBox>
                      <InputInfo
                        name="phone"
                        type="tel"
                        placeholder="+380XXXXXXXXX"
                        style={{
                          borderColor:
                            (touched.phone && errors.phone && '#E74A3B') ||
                            (touched.phone && !errors.phone && '#3CBC81'),
                        }}
                      />
                      {touched.name && errors.name && <ErrorIcon />}
                      {touched.name && !errors.name && <CorrectIcon />}
                    </IconStatusBox>
                    <ErrorMessage name="phone" component="span" />
                  </Label>

                  <Label
                    style={{
                      color:
                        (touched.skype && errors.skype && '#E74A3B') ||
                        (touched.skype && !errors.skype && '#3CBC81'),
                    }}
                  >
                    Skype
                    <IconStatusBox>
                      <InputInfo
                        name="skype"
                        type="text"
                        placeholder="Add a skype number"
                        style={{
                          borderColor:
                            (touched.skype && errors.skype && '#E74A3B') ||
                            (touched.skype && !errors.skype && '#3CBC81'),
                        }}
                      />
                      {touched.name && errors.name && <ErrorIcon />}
                      {touched.name && !errors.name && <CorrectIcon />}
                    </IconStatusBox>
                    <ErrorMessage name="skype" component="span" />
                  </Label>
                </UserInfo>
              </UserWrapper>

              <ButtonWrapper>
                <ControlBtn type="submit" disabled={!dirty && !isFormChanged}>
                  Save changes
                </ControlBtn>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </WrapperForm>
    </>
  );
};

export default UserForm;
