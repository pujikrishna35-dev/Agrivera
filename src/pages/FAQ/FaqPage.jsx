import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import FaqAccordion from '../../components/faq/FaqAccordion';

export const FaqPage = () => {
  return (
    <MainLayout>
      <SeoMeta title="Frequently Asked Questions" description="Answers to common questions about product dosages, organic certifications and dealership terms." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '6.5rem 0 3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'FAQs' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Find quick answers regarding product application, dealership requirements and quality standards.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FaqAccordion />
        </div>
      </section>
    </MainLayout>
  );
};

export default FaqPage;
