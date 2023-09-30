import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:8000/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/auth/register', credentials);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/auth/login', credentials);

            setToken(data.data.token);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.get('/user/logout');
            clearToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue('Not Valid Token');
  }

  setToken(token);

  try {
    const { data } = await axios.get('/user/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

