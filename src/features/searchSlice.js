import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    searchText: (state, action) => {
      return action.payload.toLowerCase();
    },
  },
});

export const { searchText } = searchSlice.actions;
export default searchSlice.reducer;
