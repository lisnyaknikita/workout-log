import { configureStore } from '@reduxjs/toolkit';
import DaysReducer from './slices/DaysSlice';
import TrainingSlice from './slices/TrainingSlice';
import IsActiveSlice from './slices/IsActiveSlice';
import ModalSlice from './slices/ModalSlice';

export const store = configureStore({
  reducer: {
    days: DaysReducer,
    training: TrainingSlice,
    isActive: IsActiveSlice,
    modal: ModalSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
