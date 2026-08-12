import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import ImageGallery from '../../components/gallery/ImageGallery';

export const GalleryPage = () => {
  return (
    <MainLayout>
      <SeoMeta title="Gallery & Field Trials" description="Photo and video gallery of Agrivera crop demonstrations, drone spraying, and farmer meets." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Field Gallery & Demonstrations</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Visual proof of performance across paddy fields, cotton plantations, and horticulture farms.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ImageGallery />
        </div>
      </section>
    </MainLayout>
  );
};

export default GalleryPage;
