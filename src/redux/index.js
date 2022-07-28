import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import apiSlice from "./apiSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    cardSlice,
    apiSlice,
    authSlice,
  },
});

export default store;
