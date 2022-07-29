import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardSlice",
  initialState: {
    // shoppingCard: JSON.parse(localStorage.getItem("localBasket")) || [],
    shoppingCard: [],
  },
  reducers: {
    AddProduct: (state, action) => {
      if (action.payload) {
        const addQty = state.shoppingCard.find(
          (x) => x.id == action.payload.id
        );
        if (addQty) addQty.quantity++;
        else state.shoppingCard = [action.payload, ...state.shoppingCard];
        // localStorage.setItem("localBasket", JSON.stringify(state.shoppingCard));
      }
    },
    RemoveProduct: (state, action) => {
      state.shoppingCard = state.shoppingCard.filter(
        (x) => x.id != action.payload
      );
    },
    IncrementProduct: (state, action) => {
      if (action.payload) {
        const addQty = state.shoppingCard.find((x) => x.id == action.payload);
        if (addQty) addQty.quantity++;
      }
    },
    DecrementProduct: (state, action) => {
      if (action.payload) {
        const addQty = state.shoppingCard.find((x) => x.id == action.payload);
        if (addQty) {
          if (addQty.quantity == 1) {
            state.shoppingCard = state.shoppingCard.filter(
              (x) => x.id != action.payload
            );
          } else {
            addQty.quantity--;
          }
        }
      }
    },
  },
});

export const { AddProduct, RemoveProduct, IncrementProduct, DecrementProduct } =
  cardSlice.actions;
export default cardSlice.reducer;
