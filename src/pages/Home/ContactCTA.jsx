import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8FBF8' }}>
      <div className="container">
        {/* Why Choose Agrivera Banner */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: '#0A2312', fontSize: '2.2rem', fontWeight: 800 }}>
            Why Choose Agrivera?
          </h2>
        </div>

        <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <Award size={28} color="var(--color-primary)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Advanced Technology</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Latest global technologies for better outcomes.</p>
          </div>
          <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <ShieldCheck size={28} color="var(--color-primary)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Strict Quality Standards</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>World-class manufacturing and quality control.</p>
          </div>
          <div style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <Users size={28} color="var(--color-primary)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Extensive Field Network</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Strong network for on-time delivery and support.</p>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div style={{
          backgroundColor: '#0F4C25',
          borderRadius: '24px',
          padding: '3rem',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Need Expert Crop Advisory for Your Field?
            </h3>
            <p style={{ color: '#A7F3D0', fontSize: '1rem', marginTop: '0.5rem' }}>
              Connect with Agrivera agronomists for customized dosage schedules and pest remedies.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/contact" className="btn btn-gold">
              Get Free Advisory <ArrowRight size={16} />
            </Link>
            <a href="tel:+919876543210" className="btn btn-secondary">
              <Phone size={16} /> Call Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
