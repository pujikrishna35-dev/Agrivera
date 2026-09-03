import React, { useState } from 'react';
import { CROPS_DATA } from '../../data/crops';
import { PRODUCTS_DATA } from '../../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, CheckCircle2, Sprout, BookOpen } from 'lucide-react';

export const InteractiveCropSolutions = () => {
  const [selectedCropId, setSelectedCropId] = useState('paddy');
  const crop = CROPS_DATA.find(c => c.id === selectedCropId) || CROPS_DATA[0];

  return (
    <section className="section" style={{ backgroundColor: '#F5F7F6' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            INTELLIGENT AGRONOMIC ADVISORY
          </span>
          <h2 style={{ color: '#1A1A1A', fontSize: '2.4rem', fontWeight: 800, marginTop: '0.3rem' }}>
            Crop-Wise Diagnostics & Solutions
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '600px', margin: '0.4rem auto 0 auto' }}>
            Select your crop to reveal disease threats, nutrition guides, and recommended product application schedules.
          </p>
        </div>

        {/* Interactive Crop Grid Selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {CROPS_DATA.map((item) => {
            const isSelected = item.id === selectedCropId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCropId(item.id)}
                style={{
                  backgroundColor: isSelected ? 'var(--color-primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-dark)',
                  borderRadius: '18px',
                  padding: '1.2rem 0.75rem',
                  border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                  boxShadow: isSelected ? '0 8px 24px rgba(11,110,60,0.25)' : 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: isSelected ? '2px solid #FFFFFF' : '1px solid var(--border-light)'
                }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                  {item.icon} {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Crop Dashboard Details */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-light)'
        }}>
          <div className="grid-2" style={{ gap: '3rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.6rem' }}>COMPREHENSIVE ADVISORY</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                {crop.name} <span style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>({crop.scientificName})</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                <strong>Agronomic Guidance:</strong> {crop.advisory}
              </p>

              {/* Disease Threats */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#DC2626', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldAlert size={18} /> Major Diseases & Threats:
                </h5>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {crop.keyChallenges.map((c, i) => (
                    <span key={i} style={{ backgroundColor: '#FEF2F2', color: '#B91C1C', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.825rem', fontWeight: 700 }}>
                      ⚠️ {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Best Practices */}
              <div>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={18} /> Best Practices & Nutrition Schedule:
                </h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <li>• Basal application of bio-fertilizer during bed preparation</li>
                  <li>• Foliar spray of chelated micronutrients at early tillering</li>
                  <li>• Monitor threshold pest count before systemic intervention</li>
                </ul>
              </div>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '320px' }}>
              <img src={crop.image} alt={crop.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Recommended Products Pairings */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Recommended Products for {crop.name}:
            </h4>

            <div className="grid-3">
              {PRODUCTS_DATA.slice(0, 3).map((p) => (
                <div key={p.id} style={{ backgroundColor: '#F8FAF8', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.75rem' }} />
                  <h5 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 0.3rem 0' }}>{p.name}</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{p.tagline}</p>
                  <Link to={`/products/${p.id}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                    View Product Details <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCropSolutions;
