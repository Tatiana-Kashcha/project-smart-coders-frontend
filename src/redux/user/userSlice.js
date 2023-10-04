import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initUser } from './initUser';
import { currentUser, updateUser } from './operations';

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = state => {
  state.loading = false;
  state.error = true;
};

const handleFulfilled = (state, action) => {
  state.loading = false;
  state.error = false;
  state.info = action.payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initUser,
  extraReducers: builder =>
    builder
      .addMatcher(
        isAnyOf(currentUser.pending, updateUser.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(currentUser.rejected, updateUser.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(currentUser.fulfilled, updateUser.fulfilled),
        handleFulfilled
      ),
});
