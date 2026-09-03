import React, { useState } from 'react';
import { Leaf, Star, CheckCircle2, MapPin } from 'lucide-react';

export const WhatFarmersSaySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Agrivera products improved my crop yield significantly. Their technical support is excellent and always available when we need them.",
      name: "Ramesh Yadav",
      role: "Farmer",
      location: "Haryana",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Best quality products with visible results. I have seen a big difference in crop health and production. Highly recommended for every farmer.",
      name: "Sunita Devi",
      role: "Farmer",
      location: "Punjab",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Timely support and genuine products. Agrivera is a trusted partner in our farming journey. Their guidance helps us grow better every season.",
      name: "Marimuthu",
      role: "Farmer",
      location: "Tamil Nadu",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section style={{ backgroundColor: '#F8FAF8', padding: '3rem 0 3.5rem 0' }}>
      <div className="container">
        {/* Header Section matching Image 1 */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              WHAT FARMERS SAY
            </span>
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <h2 style={{ color: '#04341A', fontSize: '2.5rem', fontWeight: 800, margin: '0.2rem 0 0 0', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            Voices of Trust, Stories of Growth{' '}
            <Leaf size={28} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)', verticalAlign: 'middle' }} />
          </h2>

          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem', fontWeight: 500 }}>
            Real experiences from real farmers who grow better with Agrivera.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid matching Image 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.8rem',
          marginBottom: '2.5rem'
        }}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem 1.8rem',
                border: '1px solid #F1F5F9',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                {/* Top Quote Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#16A34A', lineHeight: 1, fontFamily: 'sans-serif' }}>
                    “
                  </span>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F5E9',
                    color: '#16A34A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 800
                  }}>
                    ”
                  </div>
                </div>

                {/* Rating & Verified Farmer Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '0.5rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                  <span style={{ color: '#15803D', fontWeight: 800, fontSize: '0.9rem', marginLeft: '0.35rem' }}>
                    5.0
                  </span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backgroundColor: '#E8F5E9',
                  color: '#15803D',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  marginBottom: '1.2rem'
                }}>
                  <CheckCircle2 size={13} fill="#15803D" color="#E8F5E9" /> Verified Farmer
                </div>

                {/* Quote Body Paragraph */}
                <p style={{
                  fontSize: '0.925rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  minHeight: '4.8rem'
                }}>
                  {item.quote}
                </p>
              </div>

              {/* Author Footer with Avatar & Location */}
              <div style={{
                borderTop: '1px solid #F1F5F9',
                paddingTop: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: 'auto'
              }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    border: '2px solid #16A34A',
                    objectFit: 'cover',
                    flexShrink: 0
                  }}
                />

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.825rem', color: '#64748B', fontWeight: 500 }}>
                    {item.role}
                  </div>
                  <div style={{ color: '#16A34A', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.1rem' }}>
                    <MapPin size={12} color="#16A34A" /> {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots matching Image 1 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
          {[0, 1, 2, 3].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveIndex(dotIndex)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: dotIndex === activeIndex ? '#16A34A' : 'transparent',
                border: '1.5px solid #16A34A',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s ease'
              }}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatFarmersSaySection;
