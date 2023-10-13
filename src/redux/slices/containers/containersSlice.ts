import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
import profileReducer from './profileSlice';

interface ContainersState {
  dashboard: ReturnType<typeof dashboardReducer>;
  profile: ReturnType<typeof profileReducer>;
}

const initialState: ContainersState = {
  dashboard: dashboardReducer(undefined, { type: '' }), // Get the initial state from the dashboardReducer
  profile: profileReducer(undefined, { type: '' }),
};

const containersSlice = createSlice({
  name: 'containers',
  initialState,
  reducers: {
    resetContainerKey: (
      state,
      action: PayloadAction<keyof ContainersState>,
    ) => {
      state[action.payload] = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.startsWith('dashboard/'),
        (state, action) => {
          state.dashboard = dashboardReducer(state.dashboard, action);
        },
      )
      .addMatcher(
        (action) => action.type.startsWith('profile/'),
        (state, action) => {
          state.profile = profileReducer(state.dashboard, action);
        },
      );
  },
});

export const { resetContainerKey } = containersSlice.actions;

export default containersSlice.reducer;
