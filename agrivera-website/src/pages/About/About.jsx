import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { Target, Eye, Award, Users, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <MainLayout>
      <SeoMeta title="About Us" description="Learn about Agrivera Crop Solutions Pvt. Ltd. history, mission, research centers and agricultural vision." />

      <div style={{
        position: 'relative',
        backgroundImage: "linear-gradient(rgba(4, 34, 18, 0.7), rgba(4, 34, 18, 0.7)), url('/images/user_sunset_corn_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: '4rem 0',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <h1 style={{ color: '#FFFFFF', fontSize: '2.8rem', fontWeight: 800, marginTop: '0.5rem' }}>About AGRIVERA Crop Solutions</h1>
          <p style={{ fontSize: '1.15rem', color: '#E2E8F0', maxWidth: '680px', marginTop: '0.6rem', lineHeight: 1.6 }}>
            Transforming Indian agriculture through research-backed crop science, organic innovation, and relentless farmer support.
          </p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundImage: "linear-gradient(rgba(5, 38, 19, 0.35), rgba(5, 38, 19, 0.55)), url('/images/about_story_farm.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            padding: '3.5rem',
            color: '#FFFFFF',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ maxWidth: '820px' }}>
              <span className="badge badge-gold" style={{ marginBottom: '1.2rem', display: 'inline-block' }}>OUR STORY</span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.2rem', lineHeight: 1.25 }}>
                Dedicated to Sustainable Yields Since 2010
              </h2>
              <p style={{ color: '#E2E8F0', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '1.2rem' }}>
                Founded with a vision to revolutionize crop productivity, Agrivera Crop Solutions Pvt. Ltd. has grown into one of India’s premier agricultural science enterprises.
              </p>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Our state-of-the-art manufacturing plants and R&D centers focus on bio-fertilizers, systemic crop protection formulations, high-potency micronutrients, and drought-resilient seeds.
              </p>
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
