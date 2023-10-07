import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { initAuth } from './initAuth';
import { register, login, logout, refresh } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuth,
  extraReducers: builder =>
    builder

      .addCase(register.fulfilled, state => {
        state.error = false;
      })
      .addCase(register.pending, state => {
        state.error = false;
      })
      .addCase(register.rejected, state => {
        state.error = true;
      })

      .addCase(login.pending, state => state)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(login.rejected, state => (state.error = true))

      .addCase(logout.fulfilled, state => {
        state.user = { email: null, name: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        state.error = false;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = true;
      }),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
