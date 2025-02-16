import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null, // Load token from localStorage on startup
  },
  reducers: {
    setToken: (state, action) => {
      console.log("action  ", action)
      state.token = action.payload;
      console.log("state token ", state.token)
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token"); // Clear token from storage
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
