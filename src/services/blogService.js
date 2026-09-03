import { BLOGS_DATA } from '../data/blogs';

export const blogService = {
  getBlogs: async () => {
    return BLOGS_DATA;
  },
  getBlogById: async (id) => {
    return BLOGS_DATA.find(b => b.id === id) || null;
  }
};
