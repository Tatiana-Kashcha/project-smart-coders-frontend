import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const currentUser = createAsyncThunk(
  'user/currentUser',
  async (_, thunkAPI) => {
    try {
      const { data: { data } } = await axios.get('/user/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data: { data } } = await axios.patch('/user/info', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)