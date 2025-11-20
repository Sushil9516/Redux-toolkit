import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //==============================Actions===============================

    //====================================all actions always contains two parameter(state, action)
    addItem: (state, action) => {
      // console.log(action.payload);
      state.items.push(action.payload);

      state.value += 1;
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearAllItems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
