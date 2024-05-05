import { GameStateInterface } from "./../../interfaces/componentInterfaces";
import { createSlice } from "@reduxjs/toolkit";

const GameSlice = createSlice({
  name: "GameState",
  initialState: <GameStateInterface>{
    level: "Normal",
    floor: 1,
    autoPlay: false,
  },
  reducers: {
    updateLevel: (state, action) => {
      state.level = action.payload;
    },
    increaseFloor: (state) => {
      state.floor += 1;
    },
    resetFloot: (state) => {
      state.floor = 1;
    },
    updateAutoPlay: (state, action) => {
      state.autoPlay = action.payload;
    },
  },
});

export const { updateLevel, increaseFloor, resetFloot, updateAutoPlay } =
  GameSlice.actions;
export default GameSlice.reducer;
