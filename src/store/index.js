import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "../store/slice/cart/slice";

const store = configureStore({
  reducer: {
    // cartInfo: cartSlice,
  },
  devTools: true,
});

export default store;
