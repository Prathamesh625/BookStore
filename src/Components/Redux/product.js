import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const products = createSlice({
  name: "product",
  initialState,
  reducers: {
    products_list(state, action) {
      state.push(action.payload);
    },
  },
});

export const { products_list } = products.actions;
export default products.reducer;
