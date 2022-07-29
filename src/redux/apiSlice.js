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

export const getProductDetail = createAsyncThunk(
  "apiSlice/getDetailProductApi",
  async (id) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/products/${id}`
    );
    return res.data;
  }
);

export const getProductLimit = createAsyncThunk(
  "apiSlice/getProductLimitApi",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/products?limit=8`
    );
    return res.data;
  }
);

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    allProduct: [],
    limitProduct: [],
    detailProduct: [],
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

    [getProductDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductDetail.fulfilled]: (state, action) => {
      state.detailProduct = action.payload;
      state.isLoading = false;
    },
    [getProductDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [getProductLimit.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductLimit.fulfilled]: (state, action) => {
      state.limitProduct = action.payload;
      state.isLoading = false;
    },
    [getProductLimit.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default apiSlice.reducer;
