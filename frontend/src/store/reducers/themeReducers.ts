import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  darkTheme: true,
};

const selectThemeSlice = createSlice({
  name: "themeSelected",
  initialState,
  reducers: {
    setThemeSelected: (state, action: PayloadAction<boolean>) => {
      const darkTheme = action.payload;
      return {
        ...state,
        darkTheme
      }
    },
  },
});

export const { setThemeSelected } = selectThemeSlice.actions;

export default selectThemeSlice.reducer;
