/**
 * Redux Store Configuration
 * 
 * Centralized state management for:
 * - Shopping cart
 * - User authentication (future)
 * - Product data (future)
 */

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Shopping cart state management
    // Add more reducers here for user, products, etc.
  },
});