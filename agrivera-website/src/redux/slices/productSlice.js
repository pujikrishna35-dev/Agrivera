import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../../data/products';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: PRODUCTS_DATA,
    categories: PRODUCT_CATEGORIES,
    selectedCategory: 'all',
    searchQuery: '',
    selectedProduct: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setCategory, setSearchQuery, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
