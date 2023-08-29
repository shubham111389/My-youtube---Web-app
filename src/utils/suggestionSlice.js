import { createSlice } from "@reduxjs/toolkit";


const suggestionList = createSlice({
  name: "suggestion",
  initialState: {
    isSuggestionOpen: true,
  },
  reducers: {
    toggleList: (state) => {
      state.isSuggestionOpen = !state.isSuggestionOpen;
    },
    closeList: (state) => {
      state.isSuggestionOpen = false;
    },
  },
});

export const { toggleList , closeList } = suggestionList.actions;
export default suggestionList.reducer;