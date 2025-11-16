import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//CreateAsyncThunk : it is function(middleware) which is used to handle async operation.
export const fetchProducts = createAsyncThunk("products", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const jsonRes = await res.json(); // It will convert res into json format;
  return jsonRes;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.items = action.payload);
    });
  },
});

export default productSlice.reducer;
