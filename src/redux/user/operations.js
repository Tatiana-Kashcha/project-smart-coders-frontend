import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import { instance, setAuthHeader } from 'utils/axiosInctance';
// import { cleanAuthData } from 'redux/auth/authSlice';
import { toast } from 'react-hot-toast';

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
export const fetchCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem('accessToken') || '';

    try {
      setAuthHeader(accessToken);
      const response = await instance.get('/users/current');
      await thunkAPI.dispatch(addUserData(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'patchCurrentUser',
  async ({ avatar, name, email, phone, skype, birthday }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone || '');
      formData.append('skype', skype || '');
      formData.append('birthday', dateRegex.test(birthday) ? birthday : '');

      const response = await instance.patch(`/users/user`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(`${response.data.user.name} profile was updated`);
      return response.data;
    } catch (e) {
      toast.error(`Something was wronge`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
