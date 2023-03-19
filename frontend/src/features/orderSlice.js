import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderedItems: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export default orderSlice.reducer;

export const { setOrderedItems } = orderSlice.actions;
