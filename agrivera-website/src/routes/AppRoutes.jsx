import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import ProductsPage from '../pages/Products/ProductsPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import CropSolutionsPage from '../pages/CropSolutions/CropSolutionsPage';
import Innovation from '../pages/Innovation/Innovation';
import DealerNetwork from '../pages/DealerNetwork/DealerNetwork';
import KnowledgeCenter from '../pages/KnowledgeCenter/KnowledgeCenter';
import BlogsPage from '../pages/Blogs/BlogsPage';
import BlogDetails from '../pages/Blogs/BlogDetails';
import Careers from '../pages/Careers/Careers';
import Contact from '../pages/Contact/Contact';
import GalleryPage from '../pages/Gallery/GalleryPage';
import FaqPage from '../pages/FAQ/FaqPage';
import NotFound from '../pages/NotFound/NotFound';
import { ROUTES } from '../constants/routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
      <Route path={ROUTES.CROP_SOLUTIONS} element={<CropSolutionsPage />} />
      <Route path={ROUTES.INNOVATION} element={<Innovation />} />
      <Route path={ROUTES.DEALER_NETWORK} element={<DealerNetwork />} />
      <Route path={ROUTES.KNOWLEDGE_CENTER} element={<KnowledgeCenter />} />
      <Route path={ROUTES.BLOGS} element={<BlogsPage />} />
      <Route path={ROUTES.BLOG_DETAILS} element={<BlogDetails />} />
      <Route path={ROUTES.CAREERS} element={<Careers />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
      <Route path={ROUTES.FAQ} element={<FaqPage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
