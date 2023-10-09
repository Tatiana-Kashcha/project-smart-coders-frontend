import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//rjvsn
import dayjs from 'dayjs';
import { Notify } from 'notiflix';
import { Formik, ErrorMessage } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { UserValidSchema } from './UserValidSchema';
import { updateUser } from '../../redux/user/operations';
import { selectUser } from '../../redux/auth/selectors';

import * as S from './UserForm.styled';
import { DatePickerStyled, PopperDateStyles } from './DatePicker.styled';

const currentDate = dayjs(new Date()).format('YYYY-MM-DD');

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
    formData.append('birthday', dayjs(values.birthday).format('YYYY-MM-DD'));

    if (avatarURL) {
      formData.append('avatar', avatarURL);
    }

    try {
      await dispatch(updateUser(formData));
      Notify.success('Profile data changed successfully');
    } catch {
      Notify.failure('Something went wrong... Try again!');
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
            // values,
            setFieldValue,
            dirty,
            // isSubmitting,
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
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/*, .png,.jpg, .gif"
                  onChange={e => {
                    setAvatarURL(e.target.files[0]);
                    setIsFormChanged(true);
                  }}
                />
                <label htmlFor="avatar">
                  <S.AddIcon />
                </label>
              </div>
              <S.UserTitle>{userInfo.name || '****'}</S.UserTitle>
              <S.Title>User</S.Title>
              <S.UserWrapper>
                <S.UserInfo>
                  <S.Labels
                    style={{
                      color:
                        (touched.avatar && errors.avatar && '#E74A3B') ||
                        (touched.avatar && !errors.avatar && '#3CBC81'),
                    }}
                  >
                    <p>User Name</p>
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="name"
                        id="name"
                        type="text"
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

                  <S.Labels>
                    Birthday
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePickerStyled
                        name="birthday"
                        id="birthday"
                        type="date"
                        style={{
                          borderColor:
                            (touched.birthday &&
                              errors.birthday &&
                              '#E74A3B') ||
                            (touched.birthday && !errors.birthday && '#3CBC81'),
                        }}
                        slotProps={{
                          popper: {
                            sx: PopperDateStyles,
                          },
                          textField: {
                            placeholder: userInfo.birthday || `${currentDate}`,
                          },
                        }}
                        views={['year', 'month', 'day']}
                        format="YYYY-MM-DD"
                        closeOnSelect={true}
                        disableFuture={true}
                        onChange={newDate => {
                          setFieldValue(
                            'birthday',
                            dayjs(newDate).format('YYYY-MM-DD')
                          );
                        }}
                      />
                    </LocalizationProvider>
                  </S.Labels>
                  <div>
                    <S.Labels>
                      Email
                      <S.InputInfo
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Your email"
                      />
                      <ErrorMessage name="email" component="span" />
                    </S.Labels>
                  </div>
                </S.UserInfo>

                <S.UserInfo>
                  <S.Labels
                    style={{
                      borderColor:
                        (touched.email && errors.email && '#E74A3B') ||
                        (touched.email && !errors.email && '#3CBC81'),
                    }}
                  >
                    Phone
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="phone"
                        id="phone"
                        type="tel"
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
                    Skype
                    <S.IconStatusBox>
                      <S.InputInfo
                        name="skype"
                        id="skype"
                        type="text"
                        placeholder="Add a skype number"
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
