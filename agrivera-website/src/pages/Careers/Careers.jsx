import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { Briefcase, Send } from 'lucide-react';

export const Careers = () => {
  const jobs = [
    { title: 'Senior Field Agronomist', location: 'Hyderabad / Field Visits', type: 'Full-Time' },
    { title: 'Regional Sales Manager (North Zone)', location: 'Chandigarh', type: 'Full-Time' },
    { title: 'Biotechnology R&D Specialist', location: 'Agri Business Park Lab, Hyderabad', type: 'Full-Time' }
  ];

  return (
    <MainLayout>
      <SeoMeta title="Careers" description="Join the Agrivera team! Explore careers in agronomy, agricultural sales, and biotechnology research." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Careers' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Work With Us</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Build a meaningful career transforming Indian agriculture and empowering farming communities.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0A2312' }}>Open Positions</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {jobs.map((job, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--color-primary)' }}>{job.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>📍 {job.location} • {job.type}</p>
                </div>
                <button onClick={() => alert(`Applied for ${job.title}! Send resume to careers@agrivera.com`)} className="btn btn-primary btn-sm">
                  Apply Now <Send size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Careers;
