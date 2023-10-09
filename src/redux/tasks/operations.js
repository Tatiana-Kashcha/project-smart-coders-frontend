import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://project-smart-coders-backend.onrender.com';

const handleResponse = (response, errorMessage) => {
  if (response.status !== 200) {
    throw new Error(errorMessage);
  }
  return response.data;
};

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(
        `tasks?month=${date.month}&year=${date.year}`
      );

      return handleResponse(
        response,
        'Failed to fetch tasks due to server error'
      );
    } catch (error) {
      console.error(`Failed to fetch all tasks: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.post('tasks', task);

      if (response.status !== 201) {
        throw new Error('Failed to add task due to server error');
      }

      return response.data;
    } catch (error) {
      console.error(`Failed to add task: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`tasks/${taskId}`);

      if (response.status !== 200) {
        throw new Error('Failed to delete task due to server error');
      }

      console.log('Task deleted successfully');
      return taskId;
    } catch (error) {
      console.error(`Sorry, task wasn't deleted: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchTask = createAsyncThunk(
  'tasks/updateTask',
  async (task, thunkAPI) => {
    console.log('task in patchTask', task);
    try {
      const response = await axios.patch(`tasks/${task._id}`, task);

      if (response.status !== 200) {
        throw new Error('Failed to update task due to server error');
      }

      console.log('Task has been successfully corrected');
      return response.data;
    } catch (error) {
      console.error(`Sorry, something went wrong: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
