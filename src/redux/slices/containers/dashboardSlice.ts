import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';

export type DashboardState = string | null;

const initialState: DashboardState = null;

type DashboardReducers = {
  setDashboard: CaseReducer<DashboardState, PayloadAction<string>>;
  clearString: CaseReducer<DashboardState>;
};

const dashboardSlice = createSlice<DashboardState, DashboardReducers>({
  name: 'dashboard',
  initialState,
  reducers: {
    // setDashboard: (_state, action: PayloadAction<string>) => action.payload,
    setDashboard: (_state, action: PayloadAction<string>) => action.payload,
    clearString: () => null,
  },
});

export const { setDashboard, clearString } = dashboardSlice.actions;

export default dashboardSlice.reducer;
