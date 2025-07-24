import { createSlice } from "@reduxjs/toolkit";

const countryNameSlice = createSlice({
  name: "countryName",
  initialState: "",
  reducers: {
    setCountryName: (state, action) => action.payload,
  },
});

export const { setCountryName } = countryNameSlice.actions;
export const countryNameReducer = countryNameSlice.reducer;
