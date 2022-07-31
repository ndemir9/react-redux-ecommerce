import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      toast.success("Başarıyla çıkış yapıldı");
    },
  },
});

export const { loginUser, singoutUser } = authSlice.actions;

export default authSlice.reducer;
