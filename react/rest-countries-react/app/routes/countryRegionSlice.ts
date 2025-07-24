import { createSlice } from "@reduxjs/toolkit";

const countryRegionSlice = createSlice({
  name: "countryRegion",
  initialState: "",
  reducers: {
    setCountryRegion: (state, action) => action.payload,
  },
});

export const { setCountryRegion } = countryRegionSlice.actions;
export const countryRegionReducer = countryRegionSlice.reducer;