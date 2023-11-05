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
    openList: (state) =>{
      state.isSuggestionOpen= true;
    }
  },
});

export const { toggleList , closeList,openList } = suggestionList.actions;
export default suggestionList.reducer;