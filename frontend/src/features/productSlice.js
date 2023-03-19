import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // getProductDetails: (state, action) => {
    //   if (state.products) {
    //     state.productDetails = state.products.filter(
    //       (product) => product._id === action.payload
    //     );
    //   }
    // },
  },
});

export default productSlice.reducer;

export const { setProducts, getProductDetails } = productSlice.actions;
