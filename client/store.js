import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";
import userSlice from "./Slices/userSlice";

// const preloadedState = {
//   user: "",
//   matches: [],
//   profiles: [],
// };

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
