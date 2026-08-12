import React from 'react';
import { Package, Users, Store, MapPin, ThumbsUp } from 'lucide-react';

export const ImpactCounters = () => {
  const stats = [
    { number: '500+', label: 'Quality Products', icon: Package },
    { number: '10,000+', label: 'Happy Farmers', icon: Users },
    { number: '200+', label: 'Dealers & Distributors', icon: Store },
    { number: '25+', label: 'States Covered', icon: MapPin },
    { number: '98%', label: 'Customer Satisfaction', icon: ThumbsUp }
  ];

  return (
    <section style={{ backgroundColor: '#0F4C25', color: '#FFFFFF', padding: '3.5rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '2rem',
          alignItems: 'center'
        }} className="grid-2">
          {/* Header left */}
          <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.2)', paddingRight: '1.5rem' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.25, margin: 0 }}>
              Delivering Impact,<br />Creating Prosperity
            </h3>
          </div>

          {/* Stats Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.6rem'
                  }}>
                    <Icon size={20} color="#10B981" />
                  </div>
                  <span style={{ fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                    {stat.number}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#A7F3D0', fontWeight: 600, marginTop: '0.3rem' }}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
