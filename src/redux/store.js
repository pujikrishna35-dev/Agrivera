import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import dealerReducer from './slices/dealerSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    dealers: dealerReducer,
  },
});
