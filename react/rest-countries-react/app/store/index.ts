import { configureStore } from "@reduxjs/toolkit";
import { countryNameReducer } from "../routes/countryNameSlice";
import { countryRegionReducer } from "../routes/countryRegionSlice";

export const store = configureStore({
  reducer: {
    countryName: countryNameReducer,
    countryRegion: countryRegionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
