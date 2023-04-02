import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuExpansion: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleMenu(state) {
      state.menuExpansion = !state.menuExpansion;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
