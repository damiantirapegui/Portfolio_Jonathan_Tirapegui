import { configureStore } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=2ddaddbc";
import rootReducer from "/@fs/C:/Users/Damian/OneDrive/Dokument/FE23/Frontend-ramverk/Portfolio-React/src/redux/reducers.js";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
