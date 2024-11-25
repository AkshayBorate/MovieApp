import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchslice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
