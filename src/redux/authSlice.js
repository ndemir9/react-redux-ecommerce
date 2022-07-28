import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    singoutUser: (state) => {
      state.user = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, singoutUser } = authSlice.actions;

export default authSlice.reducer;
