import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "./reducer";

const store = configureStore({
  reducer: {
    bugs: bugReducer,
  },
});

export default store;
