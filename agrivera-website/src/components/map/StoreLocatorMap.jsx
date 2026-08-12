import React from 'react';
import { MapPin } from 'lucide-react';

export const StoreLocatorMap = ({ selectedState = 'All States' }) => {
  return (
    <div style={{
      backgroundColor: '#E8F5E9',
      borderRadius: '16px',
      height: '340px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px dashed var(--color-primary-light)',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(15,76,37,0.15)',
        marginBottom: '1rem'
      }}>
        <MapPin size={30} color="var(--color-primary)" />
      </div>
      <h3 style={{ color: 'var(--color-primary)', fontSize: '1.3rem' }}>Interactive Pan-India Dealer Network Map</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '480px', marginTop: '0.5rem' }}>
        Showing authorized distribution hubs for <strong>{selectedState}</strong> across 25+ agricultural zones.
      </p>
    </div>
  );
};

export default StoreLocatorMap;
