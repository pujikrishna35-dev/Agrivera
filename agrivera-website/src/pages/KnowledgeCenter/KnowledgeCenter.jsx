import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { BookOpen, Video, Download, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const KnowledgeCenter = () => {
  return (
    <MainLayout>
      <SeoMeta title="Knowledge Center" description="Farmers resource center: spray guides, dosage tables, field videos and pest identification." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Knowledge Center' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Farmer Knowledge Center</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Empowering growers with downloadable guides, field video tutorials and expert advisories.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <BookOpen size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Agronomy Articles</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Technical guides written by crop scientists.</p>
              <Link to="/blogs" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Browse Articles</Link>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <Video size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Field Demonstration Videos</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Step by step application videos.</p>
              <Link to="/gallery" className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Watch Videos</Link>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <Download size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Dosage Charts</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Download PDF spray schedules.</p>
              <a href="#download" onClick={e => { e.preventDefault(); alert('Dosage Chart PDF Downloaded!'); }} className="btn btn-gold btn-sm" style={{ marginTop: '1rem' }}>Download PDF</a>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
              <HelpCircle size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Pest FAQs</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Frequently asked questions.</p>
              <Link to="/faq" className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>View FAQs</Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default KnowledgeCenter;
