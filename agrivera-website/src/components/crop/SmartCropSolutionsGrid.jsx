import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, Leaf } from 'lucide-react';

export const SmartCropSolutionsGrid = () => {
  const cropList = [
    { id: 'paddy', name: 'Paddy', image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=400&q=80' },
    { id: 'cotton', name: 'Cotton', image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80' },
    { id: 'maize', name: 'Maize', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80' },
    { id: 'tomato', name: 'Tomato', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80' },
    { id: 'chilli', name: 'Chilli', image: '/images/crop_chilli.png' },
    { id: 'groundnut', name: 'Groundnut', image: '/images/crop_groundnut.png' },
    { id: 'sugarcane', name: 'Sugarcane', image: '/images/crop_sugarcane.png' },
    { id: 'vegetables', name: 'Vegetables', image: '/images/crop_vegetables.jpg' }
  ];

  return (
    <section style={{ backgroundColor: '#F8FAF8', padding: '0.8rem 0 2.5rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '270px 1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Left Text & Action Button */}
          <div>
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#062E1B',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Smart Solutions<br />for Every Crop{' '}
              <Leaf size={26} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)', verticalAlign: 'middle' }} />
            </h3>
            <span style={{ display: 'block', width: '40px', height: '3px', backgroundColor: '#15803D', borderRadius: '2px', marginTop: '0.4rem', marginBottom: '1.2rem' }} />

            <p style={{
              fontSize: '0.925rem',
              color: '#64748B',
              lineHeight: 1.55,
              marginBottom: '1.8rem',
              fontWeight: 500
            }}>
              Get crop wise solutions, dosage recommendations, pest control advisories and expert guidance.
            </p>

            <Link
              to="/crop-solutions"
              style={{
                backgroundColor: '#055627',
                color: '#FFFFFF',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.875rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 16px rgba(5, 86, 39, 0.25)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              Explore Crop Solutions <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right 8 Crop Cards Grid matching Image 1 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: '0.75rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}>
            {cropList.map((crop) => (
              <Link
                key={crop.id}
                to={`/crop-solutions?crop=${crop.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  paddingBottom: '0.85rem',
                  transition: 'transform 0.25s ease, boxShadow 0.25s ease'
                }}
                className="crop-card-hover"
              >
                {/* Crop Image Container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  borderRadius: '20px 20px 0 0',
                  overflow: 'hidden'
                }}>
                  <img
                    src={crop.image}
                    alt={crop.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/crop_chilli.png';
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Circular White Icon Badge overlapping bottom of image */}
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)',
                  margin: '-19px auto 0.6rem auto',
                  position: 'relative',
                  zIndex: 2,
                  border: '2px solid #FFFFFF'
                }}>
                  <Sprout size={18} color="#055627" strokeWidth={2.2} />
                </div>

                {/* Crop Title */}
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  textAlign: 'center'
                }}>
                  {crop.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCropSolutionsGrid;
