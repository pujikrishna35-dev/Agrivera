import React from 'react';
import {
  BookOpen,
  Download,
  ShieldCheck,
  Calendar,
  Leaf,
  FileText,
  HardDrive,
  Sprout,
  Sun,
  Award
} from 'lucide-react';
import { triggerSuccessConfetti } from '../../utils/animations';

export const DownloadCatalogueBanner = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    triggerSuccessConfetti();
    alert('AGRIVERA 2026 Product Catalogue PDF Download Started!');
  };

  return (
    <section style={{ backgroundColor: '#F8FAF8', padding: '3rem 0' }}>
      <div className="container">
        {/* Main Floating Container matching Image 1 */}
        <div style={{
          backgroundColor: '#042813',
          backgroundImage: `radial-gradient(circle at 10% 20%, #064E2B 0%, #031E0E 100%)`,
          borderRadius: '28px',
          padding: '3.2rem 3.5rem',
          color: '#FFFFFF',
          boxShadow: '0 24px 60px rgba(4, 30, 14, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 500px',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Resource Tag Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              border: '1.5px solid #EAB308',
              backgroundColor: 'rgba(234, 179, 8, 0.08)',
              borderRadius: '20px',
              padding: '0.35rem 0.95rem',
              color: '#EAB308',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              marginBottom: '1.2rem'
            }}>
            </div>

            {/* Main Headline */}
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              margin: '0 0 0.3rem 0'
            }}>
              Download Our<br />
              Complete Product<br />
              <span style={{ color: '#86EFAC' }}>Catalogue 2026</span>{' '}
              <Leaf size={32} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)', verticalAlign: 'middle' }} />
            </h2>

            {/* Gold Underline Accent Line */}
            <span style={{ display: 'block', width: '45px', height: '3px', backgroundColor: '#F59E0B', margin: '0.6rem 0 1.2rem 0', borderRadius: '2px' }} />

            {/* Subtitle */}
            <p style={{
              color: '#D1FAE5',
              fontSize: '0.95rem',
              lineHeight: 1.55,
              maxWidth: '460px',
              marginBottom: '1.8rem',
              fontWeight: 400
            }}>
              Get instant access to complete technical data sheets, crop nutrition schedules, dosage charts, and application instructions.
            </p>

            {/* 2 Feature Pillars in a Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '2rem',
              maxWidth: '480px'
            }}>
              {/* Pillar 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={20} color="#22C55E" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.875rem', color: '#FFFFFF', lineHeight: 1.2 }}>
                    Certified Technical<br />Formulations
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#A7F3D0', marginTop: '0.2rem' }}>
                    Trusted. Tested. Proven.
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.8rem',
                paddingLeft: '1rem',
                borderLeft: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Calendar size={20} color="#22C55E" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.875rem', color: '#FFFFFF', lineHeight: 1.2 }}>
                    Crop-Wise<br />Spray Timetables
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#A7F3D0', marginTop: '0.2rem' }}>
                    Plan better. Grow better.
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Amber Download Button */}
            <button
              onClick={handleDownload}
              style={{
                backgroundColor: '#F59E0B',
                color: '#0F172A',
                fontSize: '1.05rem',
                fontWeight: 800,
                padding: '0.95rem 2.2rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 0 30px rgba(245, 158, 11, 0.55)',
                transition: 'all 0.25 ease',
                marginBottom: '1.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 38px rgba(245, 158, 11, 0.75)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.55)';
              }}
            >
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                border: '2px solid #0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Download size={13} color="#0F172A" strokeWidth={3} />
              </div>
              Download PDF Catalogue
              <Download size={18} color="#0F172A" strokeWidth={2.5} style={{ marginLeft: '0.2rem' }} />
            </button>

            {/* Metadata Footer Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.825rem', color: '#A7F3D0', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FileText size={15} color="#A7F3D0" /> PDF Format
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <HardDrive size={15} color="#A7F3D0" /> 12 MB
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} color="#A7F3D0" /> Updated May 2026
              </span>
            </div>
          </div>

          {/* Right Column: 100% Seamless 3D Product Catalogue Showcase Graphic */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '-1.5rem',
            marginTop: '-1rem',
            marginBottom: '-1rem'
          }}>
            <img
              src="/images/catalogue_book_transparent.png"
              alt="Agrivera Product Catalogue 2026"
              onError={(e) => { e.target.src = '/images/catalogue_book_2026.png'; }}
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 18px 36px rgba(0, 0, 0, 0.5))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCatalogueBanner;
