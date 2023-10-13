import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import authReducer from './slices/authSlice';
import containersReducer from './slices/containers/containersSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    containers: containersReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
