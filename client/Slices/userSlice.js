import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { user } from "pg/lib/defaults";

const initialState = {
  user: "",
  currentProfile: "",
  matches: [],
  profiles: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfiles(state, action) {
      state.profiles = action.payload.profiles;
      currentProfile = state.profiles.pop();
    },
    makeMatch(state, action) {
      state.matches.push(action.payload.user);
    },
    getProfile(state) {
      state.currentProfile = state.profiles.pop();
    },
  },
});

export const { getProfiles, makeMatch, getProfile } = userSlice.actions;
export default userSlice.reducer;
