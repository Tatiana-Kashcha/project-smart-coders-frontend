import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { authReducer } from './auth/authSlice';
import { initAuth } from './auth/initAuth';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { initUser } from './user/initUser';
import { userSlice } from './user/userSlice';
/* import { tasksReducer } from './tasks/slice'; */

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
    /* tasks: tasksReducer, */
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
