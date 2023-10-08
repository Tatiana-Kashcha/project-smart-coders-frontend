import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, getAllTasks, patchTask } from './operations';
import { logout } from '../auth/authOperations';

const startLoading = state => {
  state.isLoading = true;
  state.error = null;
};

const loadingFailed = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        title: ' target 1',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 20',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 21',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 22',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 23',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 24',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 25',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 26',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 27',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 28',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 24',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 25',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 26',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 27',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 28',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 28',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 24',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 25',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 26',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 27',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 28',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 24',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 25',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 26',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 27',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 28',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 29',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 30',
        date: '2023-10-08',
        category: 'in-progress',
      },
      {
        title: ' target 2',
        date: '2023-10-02',
        category: 'in-progress',
      },
      {
        title: ' target 3',
        date: '2023-10-02',
        category: 'done',
      },
      {
        title: ' target 4',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 5',
        date: '2023-10-04',
        category: 'done',
      },
      {
        title: ' target 6',
        date: '2023-10-04',
        category: 'to-do',
      },
      {
        title: ' target 7',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 8',
        date: '2023-10-06',
        category: 'to-do',
      },
      {
        title: ' target 9',
        date: '2023-10-05',
        category: 'done',
      },
      {
        title: ' target 10',
        date: '2023-10-07',
        category: 'in-progress',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 12',
        date: '2023-10-03',
        category: 'to-do',
      },
      {
        title: ' target 13',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 14',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 15',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 16',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 17',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 18',
        date: '2023-10-08',
        category: 'done',
      },
      {
        title: ' target 19',
        date: '2023-10-08',
        category: 'to-do',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
      {
        title: ' target 11',
        date: '2023-10-07',
        category: 'done',
      },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addTask.pending, startLoading)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.isLoading = false;
      })
      .addCase(addTask.rejected, loadingFailed)
      .addCase(getAllTasks.pending, startLoading)
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        state.isLoading = false;
      })
      .addCase(getAllTasks.rejected, loadingFailed)
      .addCase(deleteTask.pending, startLoading)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter(task => task._id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteTask.rejected, loadingFailed)

      .addCase(patchTask.pending, startLoading)
      .addCase(patchTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.map(task =>
          task._id === payload._id ? payload : task
        );
        state.isLoading = false;
      })
      .addCase(patchTask.rejected, loadingFailed)
      .addCase(logout.fulfilled, state => {
        state.tasks = [];
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const tasksReducer = taskSlice.reducer;
