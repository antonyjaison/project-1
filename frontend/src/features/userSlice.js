import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      const userData = localStorage.getItem("userData");
      state.user = []
      state.user.push(JSON.parse(userData));
    },
    setUser: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      state.user.push(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { getUser,setUser } = userSlice.actions;
