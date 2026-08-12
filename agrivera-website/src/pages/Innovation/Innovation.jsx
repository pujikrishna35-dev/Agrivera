import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { Microchip, Zap, Leaf, Shield, Cpu } from 'lucide-react';

export const Innovation = () => {
  return (
    <MainLayout>
      <SeoMeta title="Innovation & R&D" description="Agricultural biotechnology, precision drone application, nano-nutrients and modern smart farming." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Innovation' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Pioneering Agricultural Innovation</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Integrating biotechnology, AI-driven precision drone application, and nano-formulations.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gap: '2rem' }}>
            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <Cpu size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>Precision Drone Spraying</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Automated aerial droplet dispersion technology reducing water use by 90% and ensuring 100% uniform canopy coverage.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <Zap size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>Nano-Chelated Nutrients</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Microscopic nutrient encapsulation enabling 4x faster foliar absorption without soil leaching or toxic runoff.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <Leaf size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem' }}>Bio-Pesticides & Microbial R&D</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Endophytic bacterial strains isolated for natural pest repellent synthesis and eco-friendly disease control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Innovation;
