import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {
    name: "",
    points: 0,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.points = action.payload.points;
    },
    deductPoints: (state, action) => {
      state.points -= action.payload;
    },
  },
});

export const { updateProfile, deductPoints } = ProfileSlice.actions;
export default ProfileSlice.reducer;
