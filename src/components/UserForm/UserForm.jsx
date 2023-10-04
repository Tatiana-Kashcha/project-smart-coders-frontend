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
// import {с
import * as S from './UserForm.styled';

import { DatePickerStyled, PopperDateStyles } from './DatePicker.styled';

// console.info(selectUser());
const currentDate = dayjs(new Date()).format('DD/MM/YYYY');

const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  // console.log(userInfo.user.name);
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
      <S.WrapperForm>
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
            <S.Form>
              <div>
                <S.AvatarWrapper>
                  {avatarURL ? (
                    <label htmlFor="avatar">
                      <S.ImgAvatar
                        src={URL.createObjectURL(avatarURL)}
                        alt="Avatar"
                      />
                    </label>
                  ) : userInfo.avatarURL ? (
                    <label htmlFor="avatar">
                      <S.ImgAvatar src={userInfo.avatarURL} alt="Avatar" />
                    </label>
                  ) : (
                    <S.AvatarDefault />
                  )}
                </S.AvatarWrapper>
                <S.FieldAdd
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
                  <S.AddIcon />
                </label>
              </div>
              <S.UserTitle>{userInfo.name || '****'}</S.UserTitle>
              <S.Title>User</S.Title>
              {/* user name */}
              <S.UserWrapper>
                <S.UserInfo>
                  <S.Labels
                    style={{
                      color:
                        (touched.name && errors.name && '#E74A3B') ||
                        (touched.name && !errors.name && '#3CBC81'),
                    }}
                  >
                    <p>User Name</p>
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="name"
                        placeholder="Your name"
                        style={{
                          borderColor:
                            (touched.name && errors.name && '#E74A3B') ||
                            (touched.name && !errors.name && '#3CBC81'),
                        }}
                      />
                      {touched.name && errors.name && <S.ErrorIcon />}
                      {touched.name && !errors.name && <S.CorrectIcon />}
                    </S.IconStatusBox>
                    <ErrorMessage name="name" component="span" />
                  </S.Labels>
                  <S.Labels
                    style={{
                      borderColor:
                        (touched.birthday && errors.birthday && '#E74A3B') ||
                        (touched.birthday && !errors.birthday && '#3CBC81'),
                    }}
                  >
                    <p>Birthday</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <S.IconStatusBox>
                        <DatePickerStyled
                          name="birthday"
                          type="date"
                          style={{
                            borderColor:
                              (touched.birthday &&
                                errors.birthday &&
                                '#E74A3B') ||
                              (touched.birthday &&
                                !errors.birthday &&
                                '#3CBC81'),
                          }}
                          slotProps={{
                            popper: {
                              sx: PopperDateStyles,
                            },
                            textField: {
                              placeholder:
                                userInfo.birthday || `${currentDate}`,
                              style: {
                                color:
                                  (touched.birthday &&
                                    errors.birthday &&
                                    '#E74A3B') ||
                                  (touched.birthday &&
                                    !errors.birthday &&
                                    '#3CBC81'),
                              },
                            },
                          }}
                          views={['year', 'month', 'day']}
                          format="DD.MM.YYYY"
                          closeOnSelect={true}
                          disableFuture={true}
                          onChange={date => {
                            if (!date) setFieldValue('birthday', '');
                            setFieldValue('birthday', date);
                          }}
                        />
                      </S.IconStatusBox>
                    </LocalizationProvider>
                  </S.Labels>
                  <S.Labels
                    style={{
                      color:
                        (touched.email && errors.email && '#E74A3B') ||
                        (touched.email && !errors.email && '#3CBC81'),
                    }}
                  >
                    <p>Email</p>
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="email"
                        placeholder="Your email"
                        style={{
                          borderColor:
                            (touched.email && errors.email && '#E74A3B') ||
                            (touched.email && !errors.email && '#3CBC81'),
                        }}
                      />
                      {touched.email && errors.email && <S.ErrorIcon />}
                      {touched.email && !errors.email && <S.CorrectIcon />}
                    </S.IconStatusBox>
                    <ErrorMessage name="email" component="span" />
                  </S.Labels>
                </S.UserInfo>
                <S.UserInfo>
                  <S.Labels
                    style={{
                      color:
                        (touched.phone && errors.phone && '#E74A3B') ||
                        (touched.phone && !errors.phone && '#3CBC81'),
                    }}
                  >
                    <p>Phone</p>
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="phone"
                        type="tel"
                        placeholder="Add a skype number"
                        style={{
                          borderColor:
                            (touched.phone && errors.phone && '#E74A3B') ||
                            (touched.phone && !errors.phone && '#3CBC81'),
                        }}
                      />
                      {touched.phone && errors.phone && <S.ErrorIcon />}
                      {touched.phone && !errors.phone && <S.CorrectIcon />}
                    </S.IconStatusBox>
                    <ErrorMessage name="phone" component="span" />
                  </S.Labels>
                  <S.Labels
                    style={{
                      color:
                        (touched.skype && errors.skype && '#E74A3B') ||
                        (touched.skype && !errors.skype && '#3CBC81'),
                    }}
                  >
                    <p>Skype</p>
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="skype"
                        type="text"
                        placeholder="Add a phone number"
                        style={{
                          borderColor:
                            (touched.skype && errors.skype && '#E74A3B') ||
                            (touched.skype && !errors.skype && '#3CBC81'),
                        }}
                      />
                      {touched.skype && errors.skype && <S.ErrorIcon />}
                      {touched.skype && !errors.skype && <S.CorrectIcon />}
                    </S.IconStatusBox>
                    <ErrorMessage name="skype" component="span" />
                  </S.Labels>
                </S.UserInfo>
              </S.UserWrapper>

              <S.ButtonWrapper>
                <S.ControlBtn type="submit" disabled={!dirty && !isFormChanged}>
                  Save changes
                </S.ControlBtn>
              </S.ButtonWrapper>
            </S.Form>
          )}
        </Formik>
      </S.WrapperForm>
    </>
  );
};

export default UserForm;
