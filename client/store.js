import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const preloadedState = {
  user: "",
  matches: [],
  profiles: [],
};

const store = configureStore({ reducer: rootReducer });
