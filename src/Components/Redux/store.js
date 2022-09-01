import { configureStore } from "@reduxjs/toolkit";
import myCart from "./cart";
import details from "./details";
import product from "./product";

const store = configureStore({
  reducer: {
    cart: myCart,
    book: details,
    products: product,
  },
});

export default store;
