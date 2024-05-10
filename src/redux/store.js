//
//
// Configures the Redux store with the provided root reducer using the Redux Toolkit library.

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
