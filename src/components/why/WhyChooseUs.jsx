import React from 'react';
import { Microchip, ShieldCheck, Award, UserCheck, Headphones, Sprout } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Microchip,
      title: 'Research Driven',
      description: 'Pioneering agricultural molecular biology and field-tested seed genetics for superior performance.'
    },
    {
      icon: ShieldCheck,
      title: 'Scientifically Tested',
      description: 'Every formulation undergoes 3+ seasons of multi-location field validation across soil types.'
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO 9001:2015 certified manufacturing facilities adhering to zero-impurity standards.'
    },
    {
      icon: UserCheck,
      title: 'Farmer First',
      description: 'Tailored solutions designed around cost-efficiency, yield growth, and ease of application.'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24x7 field advisory assistance and on-site agronomist visits for crop health diagnostics.'
    },
    {
      icon: Sprout,
      title: 'Sustainable Agriculture',
      description: 'Eco-safe bio-fertilizers protecting soil microflora and underground water tables.'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            THE AGRIVERA ADVANTAGE
          </span>
          <h2 style={{ color: '#1A1A1A', fontSize: '2.4rem', fontWeight: 800, marginTop: '0.3rem' }}>
            Why Choose AGRIVERA?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '600px', margin: '0.4rem auto 0 auto' }}>
            Empowering agricultural productivity through world-class science, quality rigor, and dedicated field partnership.
          </p>
        </div>

        <div className="grid-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-hover"
                style={{
                  backgroundColor: '#F8FAF8',
                  padding: '2.25rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-light)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#E8F5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Icon size={28} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
