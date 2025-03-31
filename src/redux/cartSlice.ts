import { createSlice } from "@reduxjs/toolkit";
import {  CartState } from "../constants";



const getItems =(key:string)=>{

  const jsonValue = localStorage.getItem(key);
  if(jsonValue){
    return JSON.parse(jsonValue);
  }
  return [];
};

const cart = getItems("shopping-cart")
const data = getItems("dataItems")

const initialState: CartState = {
  cartItems: cart,
  dataItems: data,
  storeItems: [],
  appliedFilters: [],
  cartQuantity:0,

};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartQuantity:(state)=>{
       state.cartQuantity = state.cartItems.reduce((quantity,item)=>item.quantity+quantity,0);
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
    setStoreItems:(state,action)=>{
       state.storeItems = action.payload;
       console.log("Data items from cartSlice::",state.storeItems)
    },
    setAppliedFilters:(state,action)=>{
         state.appliedFilters = action.payload;
    }
    ,
    setDataItems:(state,action)=>{
      state.dataItems = action.payload;
    }
  },
});

export const 
{
  increaseCartQuantity,
  emptyCart,
  setCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  removeFromSelectedFilters,
  setStoreItems,
  setAppliedFilters,
  setDataItems,
} = cartSlice.actions;
export default cartSlice.reducer;
