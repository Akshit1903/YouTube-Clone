import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isSideBarOpen: true, videoDataCache: {} },
  reducers: {
    toggleIsSideBarOpen: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    hideSideBar: (state) => {
      state.isSideBarOpen = false;
    },
    showSideBar: (state) => {
      state.isSideBarOpen = true;
    },
    storeVideoDataCache: (state, actions) => {
      if (actions.payload.id.videoId) {
        state.videoDataCache = {
          ...state.videoDataCache,
          [actions.payload.id.videoId]: actions.payload,
        };
      } else {
        state.videoDataCache = {
          ...state.videoDataCache,
          [actions.payload.id]: actions.payload,
        };
      }
    },
  },
});

export default appSlice.reducer;
export const {
  toggleIsSideBarOpen,
  hideSideBar,
  showSideBar,
  storeVideoDataCache,
} = appSlice.actions;
