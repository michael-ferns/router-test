import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    enableLoading: () => true,
    disableLoading: () => false,
  },
});

export const { enableLoading, disableLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
