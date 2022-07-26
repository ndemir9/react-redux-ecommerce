import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import apiSlice from "./apiSlice";

const store = configureStore({
  reducer: {
    cardSlice,
    apiSlice
  },
});

export default store;
