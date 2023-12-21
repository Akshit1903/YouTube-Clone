import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchSuggestions: false,
    cachedSearchSuggestions: {},
    searchTitle: "",
  },
  reducers: {
    toggleShowSearchSuggestions: (state) => {
      state.showSearchSuggestions = !state.showSearchSuggestions;
    },
    turnOffSearchSuggestions: (state) => {
      state.showSearchSuggestions = false;
    },
    turnOnSearchSuggestions: (state) => {
      state.showSearchSuggestions = true;
    },
    setSearchTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
    cacheSearchSuggestion: (state, action) => {
      state.cachedSearchSuggestions = {
        ...state.cachedSearchSuggestions,
        [state.searchTitle]: action.payload,
      };
    },
  },
});

export default searchSlice.reducer;
export const {
  toggleShowSearchSuggestions,
  turnOffSearchSuggestions,
  turnOnSearchSuggestions,
  setSearchTitle,
  cacheSearchSuggestion,
} = searchSlice.actions;
