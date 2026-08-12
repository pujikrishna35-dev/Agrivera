import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { Target, Eye, Award, Users, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <MainLayout>
      <SeoMeta title="About Us" description="Learn about Agrivera Crop Solutions Pvt. Ltd. history, mission, research centers and agricultural vision." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>About AGRIVERA Crop Solutions</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '650px', marginTop: '0.5rem' }}>
            Transforming Indian agriculture through research-backed crop science, organic innovation, and relentless farmer support.
          </p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>OUR STORY</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0A2312', marginBottom: '1rem' }}>
                Dedicated to Sustainable Yields Since 2010
              </h2>
              <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Founded with a vision to revolutionize crop productivity, Agrivera Crop Solutions Pvt. Ltd. has grown into one of India’s premier agricultural science enterprises.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Our state-of-the-art manufacturing plants and R&D centers focus on bio-fertilizers, systemic crop protection formulations, high-potency micronutrients, and drought-resilient seeds.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                alt="Agrivera R&D"
                style={{ borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: '4rem' }}>
            <div style={{ backgroundColor: '#F8FBF8', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
              <Target size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.8rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                To empower every farmer with eco-safe, scientifically validated crop inputs that maximize harvest yields while preserving soil health for future generations.
              </p>
            </div>
            <div style={{ backgroundColor: '#F8FBF8', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
              <Eye size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.8rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                To be the most trusted global partner in agricultural bio-innovation, leading the transition toward zero-hazard, sustainable farming practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
