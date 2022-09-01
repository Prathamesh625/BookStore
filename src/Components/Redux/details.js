import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  name: "",
  url: "",
  publication: "",
  price: "",
  rating: "",
};

const details = createSlice({
  name: "book",
  initialState,
  reducers: {
    add(state, action) {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.url = action.payload.imgurl;
      state.publication = action.payload.information;
      state.price = action.payload.price;
      state.rating = action.payload.ratings;
    },
  },
});

export const { add } = details.actions;
export default details.reducer;
