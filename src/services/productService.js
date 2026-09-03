import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../data/products';

export const productService = {
  getProducts: async (category = null) => {
    if (!category || category === 'all') return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter(p => p.categoryId === category);
  },
  getProductById: async (id) => {
    return PRODUCTS_DATA.find(p => p.id === id) || null;
  },
  getCategories: async () => {
    return PRODUCT_CATEGORIES;
  }
};
