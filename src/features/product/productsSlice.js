import { createSlice } from "@reduxjs/toolkit";
const { useGetProductsQuery } = require("../apiSlice");

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
