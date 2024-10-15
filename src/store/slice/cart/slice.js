import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartInfo",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === payload.cart.id && item.size === payload.cart.size
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += payload.cart.quantity;
      } else {
        state.cart = [...state.cart, payload.cart];
      }
    },
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(
        (item) => !(item.id === payload.id && item.size === payload.size)
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCart = (state) => state.cartInfo.cart;

export default cartSlice.reducer;
