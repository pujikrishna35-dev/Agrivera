import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" style={{ backgroundColor: '#F8FBF8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: '#0A2312', fontSize: '2.2rem', fontWeight: 800 }}>
            What Farmers Say 🌿
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
            Real experiences from progressive growers across India
          </p>
        </div>

        <div className="grid-3">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <Quote size={32} color="#10B981" style={{ opacity: 0.4, marginBottom: '1rem' }} />
                <p style={{ color: 'var(--text-main)', fontSize: '0.975rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--color-primary)' }}>
                    - {item.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    {item.role}, {item.location}
                  </p>
                  <div style={{ display: 'flex', gap: '2px', marginTop: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: activeIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === idx ? 'var(--color-primary)' : '#CBD5E1',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
