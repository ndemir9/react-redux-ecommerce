import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// export const getCustomers = createAsyncThunk(
//   "authSlice/getCustomersApi",
//   async (username, password) => {
//     const res = await axios.post(
//       `${process.env.REACT_APP_API_BASE_ENDPOINT}/auth/login`,
//       {
//         username: username,
//         password: password,
//       }
//     );
//   }
// );

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
