import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { authReducer } from "./auth/authSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';