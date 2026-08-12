import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { CROPS_DATA } from '../../data/crops';
import { PRODUCTS_DATA } from '../../data/products';
import { Link, useSearchParams } from 'react-router-dom';
import { Sprout, CheckCircle2, ArrowRight } from 'lucide-react';

export const CropSolutionsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCrop = searchParams.get('crop') || CROPS_DATA[0].id;
  const [activeCropId, setActiveCropId] = useState(initialCrop);

  const selectedCrop = CROPS_DATA.find(c => c.id === activeCropId) || CROPS_DATA[0];

  return (
    <MainLayout>
      <SeoMeta title="Crop Solutions & Advisory" description="Crop-wise advisory, pest control schedules and nutrient solutions for Paddy, Cotton, Maize, Vegetables and cash crops." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Crop Solutions' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Crop Wise Advisory & Solutions</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Tailored agronomic solutions and product packages for every growth stage.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Crop Selector Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '3rem' }}>
            {CROPS_DATA.map(crop => (
              <button
                key={crop.id}
                onClick={() => setActiveCropId(crop.id)}
                className={`btn ${activeCropId === crop.id ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                style={{ flexShrink: 0 }}
              >
                {crop.icon} {crop.name}
              </button>
            ))}
          </div>

          {/* Active Crop Detail Dashboard */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
            <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>CROP PROFILE</span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0A2312', marginBottom: '0.4rem' }}>
                  {selectedCrop.name} <span style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>({selectedCrop.scientificName})</span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  <strong>Agronomic Advisory:</strong> {selectedCrop.advisory}
                </p>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                  Common Pest & Disease Threats:
                </h4>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {selectedCrop.keyChallenges.map((challenge, idx) => (
                    <span key={idx} style={{ backgroundColor: '#FEF2F2', color: '#DC2626', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                      ⚠️ {challenge}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <img
                  src={selectedCrop.image}
                  alt={selectedCrop.name}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
            </div>

            {/* Recommended Products for this Crop */}
            <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                Recommended Agrivera Solutions for {selectedCrop.name}:
              </h3>

              <div className="grid-3">
                {PRODUCTS_DATA.slice(0, 3).map(product => (
                  <div key={product.id} style={{ border: '1px solid var(--border-light)', padding: '1.25rem', borderRadius: '12px', backgroundColor: '#F8FBF8' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 700 }}>{product.name}</h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.tagline}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                      View Product Details <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CropSolutionsPage;
