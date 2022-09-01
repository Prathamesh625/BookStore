import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const myCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    // remove(state, actions) {
    //    state.push(actions.payload);
    // },
  },
});

export const { add } = myCart.actions;
export default myCart.reducer;
