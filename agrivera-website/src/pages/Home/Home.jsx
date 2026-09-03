import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Hero from './Hero';
import TrustedBySection from '../../components/trusted/TrustedBySection';
import Products from './Products';
import ProductSlider from '../../components/sliders/ProductSlider';
import DeliveringImpactBanner from '../../components/impact/DeliveringImpactBanner';
import SmartCropSolutionsGrid from '../../components/crop/SmartCropSolutionsGrid';
import WhyChooseUsSection from '../../components/why/WhyChooseUsSection';
import WhatFarmersSaySection from '../../components/testimonials/WhatFarmersSaySection';
import InnovationTimeline from '../../components/timeline/InnovationTimeline';
import ManufacturingProcess from '../../components/manufacturing/ManufacturingProcess';
import ImpactSection from '../../components/impact/ImpactSection';
import DownloadCatalogueBanner from '../../components/catalogue/DownloadCatalogueBanner';
import SeoMeta from '../../components/seo/SeoMeta';

export const Home = () => {
  return (
    <MainLayout>
      <SeoMeta
        title="AGRIVERA Crop Solutions Pvt. Ltd. | Empowering Farmers. Enriching Future."
        description="Enterprise agricultural biotechnology, hybrid seeds, bio-fertilizers, systemic crop protection and micronutrients."
      />
      <Hero />
      <TrustedBySection />
      <Products />
      <ProductSlider />

      {/* Reference Sections in Sequence matching Mockup */}
      <DeliveringImpactBanner />
      <SmartCropSolutionsGrid />
      <WhyChooseUsSection />
      <WhatFarmersSaySection />

      <InnovationTimeline />
      <ManufacturingProcess />
      <ImpactSection />
      <DownloadCatalogueBanner />
    </MainLayout>
  );
};

export default Home;
