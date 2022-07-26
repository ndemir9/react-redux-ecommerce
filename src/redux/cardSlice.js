import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardSlice",
  initialState: {
    shoppingCard: JSON.parse(localStorage.getItem("localBasket")) || [],
  },
  reducers: {
    AddProduct: (state, action) => {
      if (action.payload) {
        state.shoppingCard = [action.payload, ...state.shoppingCard];
        localStorage.setItem("localBasket", JSON.stringify(state.shoppingCard));
      }
    },
  },
});

export const { AddProduct } = cardSlice.actions;
export default cardSlice.reducer;
