import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';
import { reviewsReducer } from './reviews/reviewsSlice';
import { userSlice } from './user/userSlice';
import { tasksReducer } from './tasks/slice';

import { initAuth } from './auth/initAuth';
import { initUser } from './user/initUser';

const initState = {
  auth: initAuth,
  user: initUser,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: authReducer,
    user: userSlice.reducer,
    reviews: reviewsReducer,
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
