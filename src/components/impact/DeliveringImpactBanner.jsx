import React from 'react';
import { Package, Users, Store, MapPin, ThumbsUp } from 'lucide-react';

export const DeliveringImpactBanner = () => {
  const stats = [
    { number: '500+', label: 'Quality Products', icon: Package },
    { number: '10,000+', label: 'Happy Farmers', icon: Users },
    { number: '200+', label: 'Dealers & Distributors', icon: Store },
    { number: '25+', label: 'States Covered', icon: MapPin },
    { number: '98%', label: 'Customer Satisfaction', icon: ThumbsUp }
  ];

  return (
    <section style={{
      backgroundColor: '#F8FAF8',
      padding: '0.8rem 0 0.8rem 0'
    }}>
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(6, 90, 44, 0.25)',
          padding: '2.5rem 3rem',
          backgroundImage: `linear-gradient(90deg, rgba(6, 50, 25, 0.92) 0%, rgba(4, 38, 18, 0.88) 100%), url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            {/* Left Title with Yellow Accent Line */}
            <div>
              <h3 style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.25,
                margin: 0,
                whiteSpace: 'nowrap'
              }}>
                Delivering Impact,<br />
                Creating Prosperity
              </h3>
              <div style={{
                width: '45px',
                height: '4px',
                backgroundColor: '#F59E0B',
                borderRadius: '2px',
                marginTop: '0.6rem'
              }} />
            </div>

            {/* Stats Bar with Vertical Dividers (5 columns in 1 single row) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0 0.8rem',
                      borderLeft: idx > 0 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '1.5px solid #22C55E',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.6rem'
                    }}>
                      <Icon size={22} color="#86EFAC" />
                    </div>
                    <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                      {stat.number}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600, marginTop: '0.3rem', whiteSpace: 'nowrap' }}>
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveringImpactBanner;
