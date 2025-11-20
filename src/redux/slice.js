import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // items: [],
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //==============================Actions===============================

    //====================================all actions always contains two parameter(state, action)
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      // state.value > 0 ? (state.value -= 1) : null;
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearAllItems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
