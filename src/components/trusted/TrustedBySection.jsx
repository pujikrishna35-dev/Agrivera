import React from 'react';
import { Leaf } from 'lucide-react';

export const TrustedBySection = () => {
  return (
    <section style={{
      backgroundColor: '#F8FAFC',
      padding: '1.2rem 0 1.5rem 0',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      overflow: 'hidden'
    }}>
      {/* Title + Leaf Accent */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <h4 style={{
          fontSize: '0.925rem',
          fontWeight: 800,
          color: '#334155',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: 0
        }}>
          TRUSTED BY LEADING ORGANIZATIONS
        </h4>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '0.4rem'
        }}>
          <span style={{ width: '45px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          <Leaf size={14} color="#16A34A" fill="#16A34A" />
          <span style={{ width: '45px', height: '1.5px', backgroundColor: '#86EFAC' }} />
        </div>
      </div>

      {/* 6 Equal Corporate Pillars with Vertical Dividers */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          alignItems: 'center',
          gap: 0
        }}>
          {/* 1. BAYER */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.75rem',
            borderRight: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            {/* Bayer Badge */}
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: '2.5px solid #0091DF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.06)'
            }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 900,
                color: '#0091DF',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}>
                BAYER
              </span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', margin: 0, letterSpacing: '0.04em' }}>
                BAYER
              </h5>
            </div>
          </div>

          {/* 2. IFFCO */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.75rem',
            borderRight: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            {/* IFFCO Badge */}
            <div style={{
              backgroundColor: '#008738',
              borderRadius: '6px',
              padding: '0.45rem 1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 8px rgba(0, 135, 56, 0.2)'
            }}>
              <span style={{
                fontSize: '1.05rem',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                lineHeight: 1
              }}>
                IFFCO
              </span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', margin: 0, letterSpacing: '0.04em' }}>
                IFFCO
              </h5>
            </div>
          </div>

          {/* 3. KRIBHCO */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.75rem',
            borderRight: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            {/* KRIBHCO Styled Text */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#008738',
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}>
                KRIBHCO
              </span>
              <span style={{
                width: '80%',
                height: '3px',
                backgroundColor: '#008738',
                borderRadius: '2px',
                marginTop: '3px'
              }} />
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', margin: 0, letterSpacing: '0.04em' }}>
                KRIBHCO
              </h5>
            </div>
          </div>

          {/* 4. MAHINDRA */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.75rem',
            borderRight: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            {/* Mahindra Red Arch Logo */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <svg width="42" height="22" viewBox="0 0 42 22" fill="none">
                <path d="M4 18L13 4L21 15L29 4L38 18" stroke="#E31837" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', margin: 0, letterSpacing: '0.04em' }}>
                MAHINDRA
              </h5>
            </div>
          </div>

          {/* 5. CORTEVA */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.75rem',
            borderRight: '1px solid #E2E8F0',
            textAlign: 'center'
          }}>
            {/* Corteva Blue Geometric Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M4 4H12V12H4V4Z" fill="#0066B2" />
                <path d="M14 4H22V12H14V4Z" fill="#0066B2" />
                <path d="M4 14H12V22H4V14Z" fill="#0066B2" />
                <path d="M14 14H22V22H14V14Z" fill="#008738" />
              </svg>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', margin: 0, letterSpacing: '0.04em' }}>
                CORTEVA
              </h5>
            </div>
          </div>

          {/* 6. UPL */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.75rem',
            textAlign: 'center'
          }}>
            {/* UPL Orange Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF9900 0%, #FF3366 100%)',
                boxShadow: '0 2px 8px rgba(255, 51, 102, 0.3)'
              }} />
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h5 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E293B', margin: 0, letterSpacing: '0.04em' }}>
                UPL
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
