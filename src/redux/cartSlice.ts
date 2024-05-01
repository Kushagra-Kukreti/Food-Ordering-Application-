import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../constants";

const initialState: CartState = {
  cartItems: [],
  dataItems: [],
  storeItems: [],
  appliedFilters: [],
  itemQuantity: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    getItemQuantity: (state, action) => {
      state.itemQuantity =
        state.cartItems.find((item) => item.id === action.payload)?.quantity ||
        0;
    },

    increaseCartQuantity: (state, action) => {
      const currItems = state.cartItems;
      if (currItems.find((item) => item.id === action.payload) == null) {
        state.cartItems = [...currItems, { id: action.payload, quantity: 1 }];
      } else {
        state.cartItems = currItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
    decreaseCartQuantity: (state, action) => {
      const currItems = state.cartItems;
      if (
        currItems.find((item) => item.id === action.payload)?.quantity === 1
      ) {
        state.cartItems = currItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        state.cartItems = currItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      const items = state.cartItems;
      const updatedItems = items.filter((item) => item.id !== action.payload);
      state.cartItems = updatedItems;
    },
    removeFromSelectedFilters: (state, action) => {
      const newFilters = state.appliedFilters.filter(
        (filter) => filter.t !== action.payload
      );
      state.appliedFilters = newFilters;
    },
  },
});

export const 
{
  getItemQuantity,
  increaseCartQuantity,
  emptyCart,
  decreaseCartQuantity,
  removeFromCart,
  removeFromSelectedFilters,
  
} = cartSlice.actions;
export default cartSlice.reducer;
