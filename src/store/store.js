import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
