import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
