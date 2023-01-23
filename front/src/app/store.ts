import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import studentReducer from '../features/Student/studentSlice';

export const store = configureStore({
  reducer: {
    Student:studentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
