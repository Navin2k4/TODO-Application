import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slice/theme.slice";

const store = configureStore({
  reducer: {
    themeSlice: themeReducer,
  },
});

export default store;
