import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Sprout, ArrowLeft } from 'lucide-react';
import SeoMeta from '../../components/seo/SeoMeta';

export const NotFound = () => {
  return (
    <MainLayout>
      <SeoMeta title="Page Not Found" description="The requested agricultural resource could not be located." />
      <div className="section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#E8F5E9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <Sprout size={40} color="var(--color-primary)" />
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0 1rem 0' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '460px', margin: '0 auto 2rem auto' }}>
          The page or crop advisory resource you are looking for might have been moved or updated.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Homepage
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
