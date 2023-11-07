import { configureStore } from "@reduxjs/toolkit";
import animationSteps from "./animationSteps";
const store = configureStore({
  reducer: {
    animationSteps
  },
});

export default store;
