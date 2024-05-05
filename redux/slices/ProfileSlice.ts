import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProfileInterface {
  name: string;
  points: number;
}
export const fetchUserDetails = createAsyncThunk("userDetails", () => {
  const name = sessionStorage.getItem("name") || "";
  const points = sessionStorage.getItem("points") || "0";
  return { name, points };
});

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: <ProfileInterface>{
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
  extraReducers(builder) {
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      if (action.payload) {
        state.name = action.payload.name;
        state.points = Number(action.payload.points);
      }
    });
  },
});

export const { updateProfile, deductPoints } = ProfileSlice.actions;
export default ProfileSlice.reducer;
