/**
 * Shopping Cart Slice
 * 
 * Manages:
 * - Add items to cart
 * - Remove items from cart
 * - Update quantities
 * - Calculate total price
 */

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // Array of cart items
    total: 0,   // Total price of all items
  },
  reducers: {
    // Add product to cart or increase quantity if exists
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Recalculate total
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    // Remove item from cart by ID
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;