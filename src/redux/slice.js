import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //==============================Actions===============================
    addItem: (state) => {
      console.log(state.value);
      console.log(state);

      state.value += 1;
    },
    removeItem: (state) => {
      state.value -= 1;
    },
  },
});

export const { addItem } = addToCart.actions;
export default addToCart.reducer;
