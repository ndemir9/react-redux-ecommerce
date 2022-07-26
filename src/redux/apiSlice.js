import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "apiSlice/getProductApi",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/products`
    );
    return res.data;
  }
);


const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    allProduct: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.allProduct = action.payload;
      state.isLoading = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default apiSlice.reducer;
