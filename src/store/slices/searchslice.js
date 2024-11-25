import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const seachslice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    getSearchQuery: (state, action) => {
          console.log(action.payload);
          state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { getSearchQuery } = seachslice.actions;

export default seachslice.reducer;
