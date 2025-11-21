import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ===================== ADD ITEM =====================
    addItem: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((i) => i.id === item.id);

      if (exist) {
        // Already in cart → increase quantity
        exist.quantity += 1;
      } else {
        // New item → add with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ===================== REMOVE ITEM =====================
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ===================== INCREASE QUANTITY =====================
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ===================== DECREASE QUANTITY =====================
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // ===================== CLEAR ALL ITEMS =====================
    clearAllItems: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;
