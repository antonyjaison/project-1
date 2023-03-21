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
    },
    deleteFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== action.payload
      );
    },

    setCart: (state, action) => {
      state.cartProducts = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const { deleteFromCart, addToCart, setCart } = cartSlice.actions;
