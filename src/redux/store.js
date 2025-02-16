import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Ensure authSlice.js exists

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
