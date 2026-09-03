import React, { useState, useEffect } from 'react';
import { PRODUCTS_DATA } from '../../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronLeft, ChevronRight, Leaf, Sprout } from 'lucide-react';

export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PRODUCTS_DATA.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = PRODUCTS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS_DATA.length) % PRODUCTS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS_DATA.length);
  };

  return (
    <section style={{ backgroundColor: '#F8FAF8', padding: '1.2rem 0 1rem 0' }}>
      <div className="container">
        {/* Header Section matching Image 1 */}
        <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              FEATURED INNOVATION SHOWCASE
            </span>
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <h2 style={{ color: '#04341A', fontSize: '2.5rem', fontWeight: 800, margin: '0.2rem 0 0 0' }}>
            Featured Crop Solutions
          </h2>

          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem', fontWeight: 500 }}>
            Advanced solutions for healthier crops and higher yields
          </p>
        </div>

        {/* Featured Card matching Image 1 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.06)',
          border: '1px solid #F1F5F9',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Product Image */}
            <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/category_nutrition.png';
                }}
                style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Product Info */}
            <div>
              {/* Title */}
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.35rem 0', lineHeight: 1.25 }}>
                {currentProduct.name}
              </h3>

              {/* Tagline */}
              <p style={{ fontSize: '1.05rem', color: '#15803D', fontWeight: 700, marginBottom: '1rem' }}>
                {currentProduct.tagline}
              </p>

              {/* Description */}
              <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '1.4rem', fontSize: '0.925rem' }}>
                {currentProduct.description}
              </p>

              {/* Suitable Crops */}
              <div style={{ marginBottom: '1.6rem' }}>
                <h5 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.6rem', color: '#0F172A' }}>
                  Suitable Crops:
                </h5>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {(currentProduct.targetCrops || ['Tomato', 'Chilli', 'Cotton', 'Grapes', 'Vegetables']).map((crop, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#E8F5E9',
                        color: '#15803D',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        padding: '0.35rem 0.85rem',
                        borderRadius: '20px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <Sprout size={13} color="#15803D" /> {crop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link
                  to={`/products/${currentProduct.id}`}
                  style={{
                    backgroundColor: '#0F5B31',
                    color: '#FFFFFF',
                    padding: '0.8rem 1.6rem',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(15, 91, 49, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Know More <ArrowRight size={16} />
                </Link>

                <button
                  onClick={() => alert(`Brochure for ${currentProduct.name} downloaded!`)}
                  style={{
                    backgroundColor: '#F59E0B',
                    color: '#FFFFFF',
                    padding: '0.8rem 1.6rem',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Download Brochure <Download size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Controls Row matching Image 1 */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #F1F5F9'
          }}>
            {/* Pagination Indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {PRODUCTS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: currentIndex === i ? '32px' : '8px',
                    height: '8px',
                    borderRadius: currentIndex === i ? '4px' : '50%',
                    backgroundColor: currentIndex === i ? '#0F5B31' : '#CBD5E1',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Previous / Next Arrow Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
                }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} color="#0F5B31" />
              </button>

              <button
                onClick={handleNext}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
                }}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} color="#0F5B31" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
