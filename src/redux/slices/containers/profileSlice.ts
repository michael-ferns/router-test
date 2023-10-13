import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';

export type ProfileState = string | null;

const initialState: ProfileState = null;

type ProfileReducers = {
  setProfile: CaseReducer<ProfileState, PayloadAction<string>>;
  clearString: CaseReducer<ProfileState>;
};

const profileSlice = createSlice<ProfileState, ProfileReducers>({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (_state, action: PayloadAction<string>) => action.payload,
    clearString: () => null,
  },
});

export const { setProfile, clearString } = profileSlice.actions;

export default profileSlice.reducer;
