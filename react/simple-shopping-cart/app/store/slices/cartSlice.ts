import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType, Product } from "~/types";

const initialState: CartItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItemIndex = state.findIndex((item) => item.product.id === action.payload);

      if (existingItemIndex !== - 1) {
        if(state[existingItemIndex].quantity > 1) {
          state[existingItemIndex].quantity -= 1;
        } else {
          state.splice(existingItemIndex, 1);
        }
      }
      
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
