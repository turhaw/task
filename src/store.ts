
import { configureStore } from '@reduxjs/toolkit';
import themeToggle from './models/themeToggle';
import users from './models/users';

export const store = configureStore({
  reducer: {
    themeToggle: themeToggle,
    users: users
  }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];