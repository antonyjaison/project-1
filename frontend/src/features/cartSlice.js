import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts = action.payload;
      console.log(state.cartProducts)
    },
    deleteFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== action.payload
      );
      console.log("cart", state.cartProducts);
    },
  },
});

export default cartSlice.reducer;

export const { deleteFromCart, addToCart } = cartSlice.actions;
